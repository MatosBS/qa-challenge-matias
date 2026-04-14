'use client';

import { type Message } from '@ai-sdk/react';
import { useEffect, useRef } from 'react';
import MessageBubble from './message-bubble';

interface Props {
  messages: Message[];
  isGenerating: boolean;
}

export default function MessageList({ messages, isGenerating }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400 text-sm p-8">
        <div className="text-center max-w-xs">
          <p className="font-medium text-gray-500 mb-1">No messages yet</p>
          <p>Enter a topic below to generate your first lesson plan.</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-full overflow-y-auto px-6 py-4 space-y-4">
      {messages.map(message => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isGenerating && messages[messages.length - 1]?.role !== 'assistant' && (
        <div className="flex items-center gap-2 text-gray-400 text-sm pl-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
          </div>
          <span>Generating lesson plan…</span>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
