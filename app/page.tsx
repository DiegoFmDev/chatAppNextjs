'use client';

import { useState, useEffect } from 'react';
import { db } from '../lib/firebaseConfig';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore';

type Message = {
  id: string;
  text: string;
  timestamp: Timestamp;
  user: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  // Carga los mensajes en tiempo real desde Firestore
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  // Función para enviar mensajes
  const sendMessage = async () => {
    if (newMessage.trim() === '') return;

    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      timestamp: Timestamp.now(),
      user: 'Anónimo',
    });

    setNewMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-200">
      <div className="w-full max-w-md bg-gray-800 shadow-md rounded-md p-4">
        {/* Título */}
        <h1 className="text-xl font-bold text-center mb-4">Sala de Chat</h1>

        {/* Lista de mensajes */}
        <div className="h-64 overflow-y-scroll border rounded-md p-2 mb-4 bg-gray-700">
          {messages.map((msg) => (
            <div key={msg.id} className="mb-2">
              <p className="text-sm text-gray-300">
                <strong>{msg.user}:</strong> {msg.text}
              </p>
              <span className="text-xs text-gray-500">
                {new Date(msg.timestamp.toDate()).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>

        {/* Formulario para enviar mensajes */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="flex-grow border rounded-md px-2 py-1 text-sm bg-gray-600 text-gray-200 placeholder-gray-400"
            placeholder="Escribe tu mensaje..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
