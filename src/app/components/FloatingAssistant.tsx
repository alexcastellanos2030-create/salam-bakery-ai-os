// app/components/FloatingAssistant.tsx
'use client';
import { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: '¡Hola, Alexander! Soy tu asistente de Alex Bakery AI-OS. ¿En qué te ayudo hoy en el taller?' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = inputVal;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInputVal('');

    // Respuesta simulada del sistema de IA
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { sender: 'ai', text: `Entendido sobre "${userMsg}". Procesando datos de producción para el taller de Salam Bakery.` }
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante para abrir/cerrar */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-black p-4 rounded-full shadow-2xl transition-all flex items-center justify-center cursor-pointer border-2 border-orange-300"
          title="Abrir Asistente AI"
        >
          <Bot size={26} />
        </button>
      )}

      {/* Ventana de Chat Flotante */}
      {isOpen && (
        <div className="bg-[#090a0f] border-2 border-orange-500/60 rounded-3xl w-80 sm:w-96 h-[480px] shadow-2xl flex flex-col overflow-hidden">
          
          {/* Cabecera del Chat */}
          <div className="bg-[#121620] px-4 py-3 border-b border-orange-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-orange-500/20 rounded-xl text-orange-400">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase text-orange-400">Alex Bakery AI</h3>
                <span className="text-[9px] text-green-400 font-bold">● Sistema Operativo Activo</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-orange-400 p-1 cursor-pointer transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cuerpo de Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#07080c]">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-orange-500 text-black font-medium rounded-br-none' 
                      : 'bg-[#121620] border border-orange-500/30 text-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input para escribir */}
          <form onSubmit={handleSend} className="p-3 bg-[#121620] border-t border-orange-500/30 flex gap-2">
            <input 
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Escribe una orden o consulta..."
              className="flex-1 bg-[#090a0f] border border-orange-500/30 rounded-xl px-3 py-2 text-xs text-orange-300 outline-none focus:border-orange-500"
            />
            <button 
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-black px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center font-bold"
            >
              <Send size={16} />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}