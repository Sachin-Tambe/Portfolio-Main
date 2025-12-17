import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from '@google/genai';
import { PERSONAL_INFO } from '../data';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Hello! I'm ${PERSONAL_INFO.name}'s AI Digital Twin. I can answer questions about my experience with Data Analysis, AI, and Engineering. How can I help you?`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    // Create a placeholder for the bot response
    const botMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: botMessageId,
      role: 'model',
      text: '', // Start empty for streaming
      timestamp: new Date(),
      isStreaming: true
    }]);

    try {
      const stream = await sendMessageStream(userMessage.text);
      
      let fullText = '';
      
      for await (const chunk of stream) {
        const chunkText = (chunk as GenerateContentResponse).text;
        if (chunkText) {
          fullText += chunkText;
          setMessages(prev => prev.map(msg => 
            msg.id === botMessageId 
              ? { ...msg, text: fullText } 
              : msg
          ));
        }
      }
      
      // Mark streaming as done
      setMessages(prev => prev.map(msg => 
        msg.id === botMessageId 
          ? { ...msg, isStreaming: false } 
          : msg
      ));

    } catch (err: any) {
      console.error(err);
      setError(`I'm currently offline or experiencing high traffic. Please try again later or email ${PERSONAL_INFO.name} directly.`);
      // Remove the empty bot message if it failed immediately
      setMessages(prev => prev.filter(msg => msg.id !== botMessageId));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="chat" className="py-24 bg-dark relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4 border border-secondary/20">
                <Sparkles className="w-3 h-3 mr-2" />
                Powered by Gemini 2.5
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Talk to My AI Twin
            </h2>
            <p className="text-gray-400">
            Ask about my stack, my project history, or my philosophy on AI.
            </p>
        </div>

        <div className="bg-surface/50 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden flex flex-col h-[600px]">
          {/* Chat Window */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                  {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>
                
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-primary/20 text-white rounded-tr-none' 
                    : 'bg-white/5 text-gray-200 rounded-tl-none border border-white/5'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                    {msg.text}
                    {msg.isStreaming && <span className="inline-block w-2 h-4 ml-1 bg-current animate-pulse align-middle">|</span>}
                  </p>
                  <span className="text-xs text-white/30 mt-2 block">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && !messages.find(m => m.isStreaming) && (
                 <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <Loader2 className="w-5 h-5 text-white animate-spin" />
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 flex items-center">
                        <span className="text-gray-400 text-sm">Thinking...</span>
                    </div>
                 </div>
            )}
             {error && (
                <div className="flex justify-center">
                    <div className="bg-red-500/10 border border-red-500/30 text-red-200 px-4 py-2 rounded-lg text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {error}
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-dark/50 border-t border-white/10">
            <div className="flex gap-4 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Ask me about ${PERSONAL_INFO.name}'s experience...`}
                disabled={isLoading}
                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 top-2 p-2 bg-primary rounded-lg text-white hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center mt-2">
                <p className="text-xs text-gray-600">AI can make mistakes. Please verify important information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
