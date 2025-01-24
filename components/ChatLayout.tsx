import { MessageCircle, Grid, Bell, FileText, Menu } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { ChatList } from "./ChatList";
import { ChatMessages } from "./ChatMessages";
import { GroupInfo } from "./GroupInfo";

export const ChatLayout = () => {
  return (
    <div className="flex h-screen bg-chatbg text-white">
      {/* Navigation Sidebar */}
      <nav className="w-[80px] min-w-[80px] bg-secondary p-4 flex flex-col items-center border-r border-muted/20">
        <Avatar className="w-12 h-12">
          <img src="https://github.com/shadcn.png" alt="User" className="avatar" />
        </Avatar>
        <div className="flex flex-col gap-4 mt-auto mb-auto">
          <button className="nav-icon">
            <Grid size={24} />
          </button>
          <button className="nav-icon">
            <MessageCircle size={24} />
          </button>
          <button className="nav-icon">
            <FileText size={24} />
          </button>
          <button className="nav-icon">
            <Bell size={24} />
          </button>
        </div>
      </nav>

      {/* Chat List Sidebar */}
      <aside className="w-[320px] min-w-[320px] bg-secondary border-r border-muted/20 bg-gradient-to-b from-secondary to-chatbg">
        <div className="flex flex-col gap-6 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Messages</h2>
            <span className="text-sm text-accent">20 new</span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search name..."
              className="w-full bg-messagebg rounded-lg p-3 pl-10 text-sm"
            />
            <Menu className="absolute left-3 top-3 text-muted-foreground" size={20} />
          </div>
          <ChatList />
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 min-w-[400px] flex flex-col border-r border-muted/20">
        <ChatMessages />
      </main>

      {/* Group Info Sidebar */}
      <aside className="w-[320px] min-w-[320px] bg-secondary bg-gradient-to-t from-secondary to-chatbg">
        <GroupInfo />
      </aside>
    </div>
  );
};