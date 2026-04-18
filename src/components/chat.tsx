'use client';

import { type Message, useChat } from '@ai-sdk/react';
import { type FormEvent, type KeyboardEvent, useMemo, useState } from 'react';
import { Send } from 'lucide-react';
import MessageList from './message-list';

export default function Chat() {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Optimistic user messages are shown immediately on submit so the UI
  // responds instantly without waiting for the SDK state to update.
  const [optimisticMessages, setOptimisticMessages] = useState<Message[]>([]);

  const { messages, append } = useChat({
    api: '/api/chat',
    onFinish: () => {
      setIsGenerating(false);
      setOptimisticMessages([]);
    },
    onError: () => {
      setIsGenerating(false);
      setOptimisticMessages([]);
    },
  });

  // Merge optimistic messages with SDK messages. Drop the optimistic copy once
  // the SDK has taken ownership (matched by content) to avoid duplicates.
  const displayMessages = useMemo(() => {
    const sdkUserContents = new Set(
      messages.filter(m => m.role === 'user').map(m => m.content),
    );
    const pendingOnly = optimisticMessages.filter(
      m => !sdkUserContents.has(m.content),
    );
    return [...pendingOnly, ...messages];
  }, [optimisticMessages, messages]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!input) return;

    const content = input;
    setInput('');
    setIsGenerating(true);

    const optimisticMsg: Message = {
      id: `opt-${Date.now()}`,
      role: 'user',
      content,
    };
    setOptimisticMessages(prev => [...prev, optimisticMsg]);

    // Yield to the event loop so React can flush the optimistic update
    // before the SDK begins its own state transition.
    setTimeout(() => {
      void append({ role: 'user', content });
    }, 0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e as unknown as FormEvent);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl font-semibold text-gray-900">Lesson Plan Generator</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Enter a topic to generate a structured lesson plan
          </p>
        </div>
      </header>

      <div className="flex-1 overflow-hidden max-w-3xl mx-auto w-full flex flex-col">
        <MessageList messages={displayMessages} isGenerating={isGenerating} />
      </div>

      <div className="bg-white border-t border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isGenerating}
              placeholder="Enter a lesson plan topic (e.g. 'photosynthesis for 5th grade')…"
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isGenerating}
              className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              {isGenerating ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send size={16} />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
