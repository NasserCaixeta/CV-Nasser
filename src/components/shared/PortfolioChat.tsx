"use client";

import { FormEvent, KeyboardEvent, useMemo, useRef, useState } from "react";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";

const MAX_MESSAGE_LENGTH = 500;

type ChatRole = "assistant" | "user";

interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

interface PortfolioChatProps {
  locale: Locale;
}

const copy = {
  pt: {
    title: "Assistente do portfolio",
    subtitle: "Pergunte sobre Nasser",
    initial:
      "Ola! Sou o assistente do portfolio do Nasser. Pode me perguntar sobre experiencias, projetos ou tecnologias.",
    placeholder: "Digite sua pergunta...",
    open: "Abrir chat do portfolio",
    close: "Fechar chat",
    send: "Enviar mensagem",
    loading: "Respondendo...",
    tooLong: "Sua mensagem esta muito longa. Use ate 500 caracteres.",
    genericError: "Nao consegui responder agora. Tente novamente em instantes.",
  },
  en: {
    title: "Portfolio assistant",
    subtitle: "Ask about Nasser",
    initial:
      "Hi! I am Nasser's portfolio assistant. Ask me about experience, projects, or technologies.",
    placeholder: "Type your question...",
    open: "Open portfolio chat",
    close: "Close chat",
    send: "Send message",
    loading: "Replying...",
    tooLong: "Your message is too long. Use up to 500 characters.",
    genericError: "I could not reply right now. Please try again soon.",
  },
} as const;

function createMessage(role: ChatRole, content: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    content,
  };
}

export function PortfolioChat({ locale }: PortfolioChatProps) {
  const labels = copy[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    createMessage("assistant", labels.initial),
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const remainingCharacters = useMemo(
    () => MAX_MESSAGE_LENGTH - input.length,
    [input.length]
  );

  async function handleSubmit(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const message = input.trim();

    if (!message || isLoading) {
      return;
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      setError(labels.tooLong);
      return;
    }

    setError("");
    setInput("");
    setIsLoading(true);
    setMessages((current) => [...current, createMessage("user", message)]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, locale }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || labels.genericError);
      }

      setMessages((current) => [
        ...current,
        createMessage("assistant", data.reply || labels.genericError),
      ]);
    } catch (requestError) {
      const errorMessage =
        requestError instanceof Error ? requestError.message : labels.genericError;

      setError(errorMessage);
      setMessages((current) => [...current, createMessage("assistant", errorMessage)]);
    } finally {
      setIsLoading(false);
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      void handleSubmit();
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section
          className="glass flex h-[min(560px,calc(100vh-2.5rem))] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-xl shadow-2xl"
          aria-label={labels.title}
        >
          <header className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-background glow-accent">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-sm font-semibold text-foreground">
                  {labels.title}
                </h2>
                <p className="text-xs text-muted">{labels.subtitle}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-muted transition-colors hover:bg-card hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={labels.close}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <p
                  className={cn(
                    "max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed",
                    message.role === "user"
                      ? "bg-accent text-background"
                      : "border border-border bg-card text-foreground"
                  )}
                >
                  {message.content}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <p className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm text-muted">
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  {labels.loading}
                </p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-3">
            {error && <p className="mb-2 text-xs text-red-300">{error}</p>}
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                  if (error) {
                    setError("");
                  }
                }}
                onKeyDown={handleKeyDown}
                maxLength={MAX_MESSAGE_LENGTH + 1}
                placeholder={labels.placeholder}
                className="min-w-0 flex-1 rounded-lg border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading || remainingCharacters < 0}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-background transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent disabled:pointer-events-none disabled:opacity-50"
                aria-label={labels.send}
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </form>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background glow-accent"
          aria-label={labels.open}
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
