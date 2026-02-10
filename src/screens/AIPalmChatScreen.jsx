import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@hooks/useNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { useUser } from '@context/UserContext';
import { generateAIResponse } from '@services/aiService';
import ChatMessage from '@components/features/ChatMessage';
import ChatInput from '@components/features/ChatInput';
import AnimatedBackground from '@components/ui/AnimatedBackground';

const AIPalmChatScreen = () => {
  const { params } = useNavigation();
  const { userProfile } = useUser();
  const { language } = useLanguage();
  
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  // Initialize Chat
  useEffect(() => {
    const initialGreeting = {
      role: 'assistant',
      content: `Greetings, ${userProfile.name || 'Seeker'}. I am Aura, your spiritual guide. How may I illuminate your path today?`
    };
    
    // If we came from a reading results page, add context
    if (params && params.context) {
        initialGreeting.content = `I see you've just completed a reading. What questions do you have about your destiny lines?`;
    }

    setMessages([initialGreeting]);
  }, []);

  // Scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text) => {
    // Add User Message
    const userMsg = { role: 'user', content: text };
    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setIsLoading(true);

    try {
      // Get AI Response
      // We pass only the last few messages to keep context but save tokens
      const contextWindow = newHistory.slice(-6); 
      
      const responseText = await generateAIResponse(text, language, contextWindow);
      
      const aiMsg = { role: 'assistant', content: responseText };
      setMessages(prev => [...prev, aiMsg]);

    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'The cosmic connection is weak right now. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-145px)]"> {/* Height adjusted for Header + BottomNav */}
      <AnimatedBackground />

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-4 z-10 scrollbar-hide">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        
        {isLoading && (
          <div className="flex justify-start mb-4 animate-pulse">
             <div className="bg-glass-light px-4 py-2 rounded-2xl rounded-tl-none text-sm text-white/50">
               Consulting the stars...
             </div>
          </div>
        )}
        
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div className="z-20 bg-gradient-to-t from-cosmic-900 to-transparent pt-4">
        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default AIPalmChatScreen;
