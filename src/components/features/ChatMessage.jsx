import React from 'react';
import ReactMarkdown from 'react-markdown'; // Optional: Use simple rendering if library not added
import Avatar from '@components/ui/Avatar';
import ChatIcon from '@assets/icons/ChatIcon';

/**
 * 💬 Chat Message Bubble
 * Renders user or AI messages.
 */
const ChatMessage = ({ message }) => {
  const isAI = message.role === 'assistant';
  const isSystem = message.role === 'system';

  if (isSystem) return null; // Don't show system prompts

  return (
    <div 
      className={`
        flex w-full mb-6 
        ${isAI ? 'justify-start' : 'justify-end'}
        animate-fade-in-up
      `}
    >
      {/* AI Avatar */}
      {isAI && (
        <div className="w-8 h-8 rounded-full bg-mystic-500 flex items-center justify-center mr-3 shrink-0 shadow-glow">
          <ChatIcon className="w-4 h-4 text-white" />
        </div>
      )}

      {/* Message Bubble */}
      <div 
        className={`
          max-w-[85%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed
          ${isAI 
            ? 'bg-glass-light rounded-tl-none text-gray-100 border border-white/10' 
            : 'bg-mystic-600 rounded-tr-none text-white shadow-glow-sm'
          }
        `}
      >
        <div className="prose prose-invert prose-sm max-w-none">
          {/* Simple markdown support (bold/italic) */}
          {message.content.split('\n').map((line, i) => (
            <p key={i} className={line.trim() === '' ? 'h-2' : 'mb-1 last:mb-0'}>
              {line}
            </p>
          ))}
        </div>
        
        {/* Timestamp */}
        <div className={`text-[10px] mt-2 opacity-50 ${isAI ? 'text-left' : 'text-right'}`}>
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* User Avatar */}
      {!isAI && (
        <div className="ml-3 shrink-0">
          <Avatar size="sm" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
