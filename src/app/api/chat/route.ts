import { NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 500;
const GROQ_MODEL = "llama-3.1-8b-instant";

type ChatLocale = "pt" | "en";

const portfolioContext = `
Voce e um assistente do portfolio de Nasser Camello Caixeta. Responda de forma curta, natural, profissional e direta.
Responda apenas perguntas sobre Nasser, sua carreira, experiencias, projetos, tecnologias, formacao e formas de contato.
Nao invente informacoes. Se nao souber a resposta, diga educadamente que o visitante pode entrar em contato com Nasser pelo LinkedIn, GitHub ou email.

Informacoes sobre Nasser:
- Nasser Camello Caixeta e desenvolvedor de software.
- Tem foco em React, Node.js, TypeScript, JavaScript, Python, APIs REST, PostgreSQL, Docker, automacoes e aplicacoes web.
- Possui experiencia com desenvolvimento frontend, backend, integracoes, automacoes internas, solucoes com IA, chatbots, analise de tickets tecnicos e ferramentas para melhoria de processos.
- Trabalhou com tecnologias como React, Node.js, TypeScript, Python, Celery, Redis, PostgreSQL, Docker, OpenAI/Llama, Langfuse e APIs.
- Ja desenvolveu interfaces internas, APIs, automacoes, fluxos assincronos e solucoes aplicadas a processos tecnicos.
- Projetos relevantes incluem CaloCount, Camelbox Financas, Gois-Ticket, Gerenciador de Ativos Forte, portfolio pessoal, aplicacoes full stack e solucoes com IA aplicada.
- O portfolio informa contato por email em nassercaixeta.profissional@gmail.com, LinkedIn em https://www.linkedin.com/in/nasser-caixeta e GitHub em https://github.com/NasserCaixeta.
- O tom deve ser profissional, mas natural.
- Nao use linguagem exageradamente comercial.
- Nao diga que e uma IA criada por IA. Apenas se apresente como assistente do portfolio.
`;

interface ChatRequestBody {
  message?: unknown;
  locale?: unknown;
}

type GroqChoice = {
  message?: {
    content?: string;
  };
};

function createError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

function getLocale(value: unknown): ChatLocale {
  return value === "en" ? "en" : "pt";
}

function getSystemInstruction(locale: ChatLocale) {
  const languageInstruction =
    locale === "en"
      ? "Always answer in English. If the visitor writes in another language, still answer in English because the current portfolio page is in English."
      : "Sempre responda em portugues do Brasil. Se o visitante escrever em outro idioma, ainda responda em portugues porque a pagina atual do portfolio esta em portugues.";

  return `${portfolioContext}\n${languageInstruction}`;
}

function getMessages(locale: ChatLocale) {
  return {
    notConfigured:
      locale === "en"
        ? "The chat is not configured yet."
        : "O chat ainda nao esta configurado.",
    invalidJson:
      locale === "en"
        ? "I could not read your message."
        : "Nao foi possivel ler sua mensagem.",
    empty:
      locale === "en"
        ? "Type a message before sending."
        : "Digite uma mensagem antes de enviar.",
    tooLong:
      locale === "en"
        ? "Your message is too long. Send a shorter question."
        : "Sua mensagem esta muito longa. Envie uma pergunta mais curta.",
    rateLimit:
      locale === "en"
        ? "The assistant reached a temporary usage limit. Try again soon."
        : "O assistente atingiu o limite temporario de uso. Tente novamente em instantes.",
    unavailable:
      locale === "en"
        ? "I could not reply right now. Please try again soon."
        : "Nao consegui responder agora. Tente novamente em instantes.",
    emptyReply:
      locale === "en"
        ? "I could not generate a reply right now."
        : "Nao consegui gerar uma resposta agora.",
    generic:
      locale === "en"
        ? "An error occurred while contacting the assistant."
        : "Ocorreu um erro ao falar com o assistente.",
  };
}

function extractGroqText(data: unknown) {
  if (
    typeof data !== "object" ||
    data === null ||
    !("choices" in data) ||
    !Array.isArray(data.choices)
  ) {
    return "";
  }

  return (data.choices as GroqChoice[])
    .map((choice) => choice.message?.content ?? "")
    .filter(Boolean)
    .join(" ")
    .trim();
}

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;

  let body: ChatRequestBody;

  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return createError("Nao foi possivel ler sua mensagem.", 400);
  }

  const locale = getLocale(body.locale);
  const messages = getMessages(locale);
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!apiKey) {
    return createError(messages.notConfigured, 500);
  }

  if (!message) {
    return createError(messages.empty, 400);
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return createError(messages.tooLong, 400);
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          {
            role: "system",
            content: getSystemInstruction(locale),
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.4,
        max_tokens: 220,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("Groq chat error", {
        status: response.status,
        message:
          typeof errorData?.error?.message === "string"
            ? errorData.error.message
            : "Unknown Groq API error",
      });

      if (response.status === 429) {
        return createError(messages.rateLimit, 429);
      }

      return createError(messages.unavailable, 502);
    }

    const data = await response.json();
    const text = extractGroqText(data);

    if (!text) {
      return createError(messages.emptyReply, 502);
    }

    return NextResponse.json({ reply: text });
  } catch {
    return createError(messages.generic, 500);
  }
}
