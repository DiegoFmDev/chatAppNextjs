import { useState } from "react";

interface UserNamePromptProps {
  onSetUserName: (name: string) => void;
}

export default function UserNamePrompt({ onSetUserName }: UserNamePromptProps) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      onSetUserName(name);
    } else {
      alert("Por favor ingresa un nombre válido.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-lg font-bold mb-4">Ingresa tu nombre</h2>
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded w-full px-3 py-2 mb-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Entrar al Chat
        </button>
      </div>
    </div>
  );
}
