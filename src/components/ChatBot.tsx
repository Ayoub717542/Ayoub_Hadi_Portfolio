// Floating chat button + terminal-style window. Visitors ask questions about Hadi,
// answered by the AI through functions/api/chat.ts.

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { CodeXml, CornerDownLeft, X } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SUGGESTIONS = ['Top projects?', 'Tech stack?', 'Available for hire?'];
const HELLO_DELAY_MS = 4000;
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [typed, setTyped] = useState(0); // letters of the last answer shown so far
  const [hello, setHello] = useState(false);
  const listEnd = useRef<HTMLDivElement>(null);

  const last = messages[messages.length - 1];
  const typing = last?.role === 'model' && typed < last.text.length;

  // Typing animation: show the last answer a few letters at a time.
  useEffect(() => {
    if (!typing) return;
    const id = setTimeout(() => setTyped((n) => n + 3), 15);
    return () => clearTimeout(id);
  }, [typing, typed]);

  // Always show the newest message.
  useEffect(() => {
    listEnd.current?.scrollIntoView({ block: 'end' });
  }, [messages, loading, typed]);

  // "Hello" bubble near the button, once per visitor.
  useEffect(() => {
    if (localStorage.getItem('chatHello')) return;
    const id = setTimeout(() => setHello(true), HELLO_DELAY_MS);
    return () => clearTimeout(id);
  }, []);

  function toggle() {
    setOpen(!open);
    setHello(false);
    localStorage.setItem('chatHello', '1');
  }

  async function send(text: string) {
    text = text.trim();
    if (!text || loading || typing) return;

    const next: Message[] = [...messages, { role: 'user', text }];
    setMessages(next);
    setInput('');
    setLoading(true);
    let answer: string;
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      answer = data.answer ?? data.error;
    } catch {
      answer = 'The assistant is not available right now.';
    }
    setTyped(reduceMotion() ? answer.length : 0);
    setMessages([...next, { role: 'model', text: answer }]);
    setLoading(false);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="fixed bottom-5 end-5 z-50 flex flex-col items-end font-mono">
      {open && (
        // stopPropagation: scrolling inside the chat must not move to the next page (usePaging.ts)
        <div
          onWheel={(e) => e.stopPropagation()}
          className="chat-pop mb-4 flex h-[30rem] w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-xl border border-chat-line bg-chat-bg text-[13px] text-chat-text shadow-2xl"
        >
          {/* Title bar like a terminal window */}
          <div className="flex items-center gap-2 border-b border-chat-line bg-chat-bar px-4 py-2.5">
            <span className="size-3 rounded-full bg-[#ff5f56]" />
            <span className="size-3 rounded-full bg-[#ffbd2e]" />
            <span className="size-3 rounded-full bg-[#27c93f]" />
            <span className="ms-2 flex-1 truncate text-xs text-chat-dim" dir="ltr">
              hadi@portfolio: ~/ask-ai
            </span>
            <button onClick={toggle} aria-label="Close" className="text-chat-dim hover:text-chat-text">
              <X className="size-4" />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-4 leading-relaxed">
            <div>
              <p className="text-chat-dim" dir="ltr">$ ai --about hadi</p>
              <p className="text-chat-green">✓ Assistant ready. Ask me anything about Hadi.</p>
            </div>

            {messages.map((m, i) => {
              const isLast = i === messages.length - 1;
              return m.role === 'user' ? (
                <p key={i} className="whitespace-pre-wrap">
                  <span className="text-chat-blue">&gt; </span>
                  {m.text}
                </p>
              ) : (
                <p key={i} className="whitespace-pre-wrap text-chat-text">
                  <span className="text-chat-purple">◆ </span>
                  {isLast ? m.text.slice(0, typed) : m.text}
                  {isLast && typing && <span className="chat-cursor">█</span>}
                </p>
              );
            })}

            {loading && (
              <p className="text-chat-dim">
                <span className="text-chat-purple">◆ </span>thinking<span className="chat-cursor">█</span>
              </p>
            )}

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-md border border-chat-line px-2.5 py-1 text-xs text-chat-dim transition-colors hover:border-chat-blue hover:text-chat-blue"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={listEnd} />
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-chat-line bg-chat-bar px-4 py-3">
            <span className="text-chat-green">&gt;_</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type your question…"
              maxLength={1000}
              autoFocus
              className="flex-1 bg-transparent text-chat-text outline-none placeholder:text-chat-dim/70"
            />
            <button
              type="submit"
              disabled={loading || typing}
              aria-label="Send"
              className="rounded border border-chat-line p-1.5 text-chat-dim hover:text-chat-text disabled:opacity-40"
            >
              <CornerDownLeft className="size-3.5" />
            </button>
          </form>
        </div>
      )}

      {hello && !open && (
        <button
          onClick={toggle}
          className="chat-pop mb-3 rounded-lg border border-line bg-bg px-3 py-2 text-xs shadow-lg"
        >
          👋 Ask my AI about me!
        </button>
      )}

      {/* The button: </> icon, pulsing glow ring, "AI" badge */}
      <button
        onClick={toggle}
        aria-label="Chat"
        className="chat-ring group relative flex size-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-110"
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <CodeXml className="size-6 transition-transform duration-300 group-hover:rotate-12" />
        )}
        <span className="absolute -end-1 -top-1 rounded-full bg-chat-green px-1.5 py-0.5 text-[10px] font-bold leading-none text-chat-bg">
          AI
        </span>
      </button>
    </div>
  );
}
