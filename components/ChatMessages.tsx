import { Avatar } from "@/components/ui/avatar";
import { Send, Mic } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "Alex Hurriyal",
    message: "I saw these shots I think they are awesome. Nice Work",
    time: "22h ago",
    avatar: "/placeholder.svg",
    type: "received",
  },
  {
    id: 2,
    sender: "You",
    message: "Lorem ipsum dolor sit amet consectetur. Metus potenti nunc sed id aliquet massa.",
    time: "12m ago",
    avatar: "/placeholder.svg",
    type: "sent",
  },
];

export const ChatMessages = () => {
  return (
    <>
      <div className="flex-1 p-6 overflow-y-auto space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.type === "sent" ? "flex-row-reverse" : ""
            }`}
          >
            <Avatar className="w-10 h-10">
              <img src={message.avatar} alt={message.sender} className="avatar" />
            </Avatar>
            <div
              className={`message-bubble ${
                message.type === "sent" ? "message-sent" : "message-received"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{message.sender}</span>
                <span className="text-xs opacity-70">{message.time}</span>
              </div>
              <p>{message.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-muted">
        <div className="flex items-center gap-3 bg-messagebg rounded-lg p-3">
          <Avatar className="w-8 h-8">
            <img src="https://github.com/shadcn.png" alt="You" className="avatar" />
          </Avatar>
          <input
            type="text"
            placeholder="Type something here..."
            className="flex-1 bg-transparent outline-none"
          />
          <button className="p-2 hover:text-accent transition-colors">
            <Mic size={20} />
          </button>
          <button className="p-2 hover:text-accent transition-colors">
            <Send size={20} />
          </button>
        </div>
      </div>
    </>
  );
};