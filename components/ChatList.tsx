import { Avatar } from "@/components/ui/avatar";

const chatItems = [
  {
    id: 1,
    name: "UI/UX Group",
    lastMessage: "You: UX consulting lorr",
    time: "12m",
    avatar: "/placeholder.svg",
    unread: 1,
  },
  {
    id: 2,
    name: "Laura Laurense",
    lastMessage: "UX consulting with users",
    time: "12m",
    avatar: "/placeholder.svg",
    unread: 1,
  },
  // Add more chat items as needed
];

export const ChatList = () => {
  return (
    <div className="space-y-2">
      {chatItems.map((chat) => (
        <div key={chat.id} className="sidebar-item">
          <Avatar className="w-10 h-10">
            <img src={chat.avatar} alt={chat.name} className="avatar" />
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium">{chat.name}</h3>
              <span className="text-xs text-muted-foreground">{chat.time}</span>
            </div>
            <p className="text-sm text-muted-foreground">{chat.lastMessage}</p>
          </div>
          {chat.unread && (
            <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-xs">
              {chat.unread}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};