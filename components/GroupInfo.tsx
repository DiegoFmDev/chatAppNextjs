import { Avatar } from "@/components/ui/avatar";
import { X, Plus } from "lucide-react";

export const GroupInfo = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Group Info</h2>
        <button className="p-2 hover:bg-messagebg rounded-lg transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="text-center mb-6">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <img src="/placeholder.svg" alt="Group" className="avatar" />
        </Avatar>
        <h3 className="text-xl font-semibold">UI/UX Group</h3>
        <p className="text-muted-foreground">22 members</p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Description</h4>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Laoreet accumsan turpis volutpat nunc enim.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium">Members</h4>
            <button className="text-accent hover:underline text-sm">See all</button>
          </div>
          <div className="space-y-2">
            {[1, 2].map((member) => (
              <div key={member} className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <img src="/placeholder.svg" alt="Member" className="avatar" />
                </Avatar>
                <div className="flex-1">
                  <h5 className="font-medium">Laura Laurense</h5>
                  <p className="text-xs text-muted-foreground">Lead UI/UX Designer</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-messagebg hover:bg-accent transition-colors">
          <Plus size={20} />
          <span>Invite Others</span>
        </button>
      </div>
    </div>
  );
};