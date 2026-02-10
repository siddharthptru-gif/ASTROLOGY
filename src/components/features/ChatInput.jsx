import React, { useState, useRef, useEffect } from 'react';
import SendIcon from '@assets/icons/SendIcon';
import IconButton from '@components/ui/IconButton';
import { CHAT_SUGGESTIONS } from '@utils/constants';

/**
 * ⌨️ Chat Input Area
 * Auto-expanding textarea with suggestions.
 */
const ChatInput = ({ onSend, isLoading }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [text]);

  const handleSubmit = () => {
    if (!text.trim() || isLoading) return;
    onSend(text);
    setText('');
    // Reset height
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full">
      {/* Suggestions Bubble Row */}
      <div className="flex overflow-x-auto gap-2 pb-3 px-4 scrollbar-hide">
        {CHAT_SUGGESTIONS.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => setText(suggestion)}
            className="flex-shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/80 transition-colors whitespace-nowrap"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <div className="px-4 pb-4">
        <div className="relative flex items-end bg-white/10 border border-white/10 rounded-[24px] p-2 focus-within:bg-white/15 focus-within:border-mystic-400/50 transition-all">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask the stars..."
            className="w-full bg-transparent border-none text-white placeholder-white/40 px-4 py-3 max-h-32 resize-none focus:ring-0 text-sm leading-relaxed"
            rows={1}
            disabled={isLoading}
          />
          
          <div className="pb-1 pr-1">
            <IconButton
              onClick={handleSubmit}
              disabled={!text.trim() || isLoading}
              variant="filled"
              className={`w-10 h-10 ${!text.trim() ? 'opacity-50 bg-gray-600' : 'bg-mystic-500'}`}
              icon={<SendIcon className="w-5 h-5 translate-x-0.5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
