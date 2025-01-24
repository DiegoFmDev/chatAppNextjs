// components/ChatInput.tsx
import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);
      setText("");
    } else {
      alert("El mensaje no puede estar vacío.");
    }
  };

  return (
    <div className="flex items-center p-4 bg-gray-800">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe un mensaje..."
        className="flex-1 bg-gray-700 text-white rounded px-3 py-2"
      />
      <button
        onClick={handleSend}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Enviar
      </button>
    </div>
  );
}
