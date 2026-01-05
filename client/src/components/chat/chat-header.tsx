import React, { useState } from "react";
import { getOtherUserAndGroup } from "@/lib/helper";
import { PROTECTED_ROUTES } from "@/routes/routes";
import type { ChatType } from "@/types/chat.type";
import { ArrowLeft, Group } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AvatarWithBadge from "../avatar-with-badge";
import { API } from "@/lib/axios-client";

interface Props {
  chat: ChatType;
  currentUserId: string | null;
}

const ChatHeader = ({ chat, currentUserId }: Props) => {
  const navigate = useNavigate();
  const { name, subheading, avatar, isOnline, isGroup } = getOtherUserAndGroup(
    chat,
    currentUserId
  );
  const [members, setMembers] = useState<any[]>([]);
const [open, setOpen] = useState(false);
const [gname, setGname] = useState("");
// const [add, setadd] = useState(false);

const showAllmemberGroup = async () => {
  try {
    const response = await API.get(`/user/allGroup/${name}`);
    setMembers(response.data.Users); // ✅ update state
    setOpen(!open);                   // show section
  } catch (error) {
    console.log(error);
  }
};

const addGroupMember = async() =>{
const groupName = name;  
try {
const response =  await API.post(`/user/addGroupMember`,{groupName,gname})
if (response) {
  setOpen(false);   
}
} catch (error) {
console.log(error);
  
}
}
  
const removeUser = async(id:string) =>{
if(!id) return;
const groupName = name  
try {
const response =  await API.post("/user/removeUser",{groupName,id});
if (response) {
  setOpen(false);   
}
} catch (error) {
console.log(error);
  
}  
}



  return (
    <div
      className="sticky top-0
    flex items-center gap-5 border-b border-border
    bg-card px-2 z-50
    "
    >
      <div className="h-14 px-4 flex items-center" onClick={showAllmemberGroup}>
        <div>
          <ArrowLeft
            className="w-5 h-5 inline-block lg:hidden
          text-muted-foreground cursor-pointer
          mr-2
          "
            onClick={() => navigate(PROTECTED_ROUTES.CHAT)}
          />
        </div>
        <AvatarWithBadge
          name={name}
          src={avatar}
          isGroup={isGroup}
          isOnline={isOnline}
        />
        <div className="ml-2">
          <h5 className="font-semibold">{name}</h5>
          <p
            className={`text-sm ${
              isOnline ? "text-green-500" : "text-muted-foreground"
            }`}
          >
            {subheading}
          </p>
        </div>
      </div>
      <div>
        <div
          className={`flex-1
            text-center
            py-4 h-full
            border-b-2
            border-primary
            font-medium
            text-primary`}
        >
          Chat
        </div>
      </div>
{open && (
  <section
    className="
      fixed lg:static
      top-0 left-0
      w-full lg:w-[360px]
      h-full lg:h-auto
      bg-card
      border-r border-border
      z-50
      p-4
      overflow-y-auto
    "
  >
    {/* HEADER */}
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-sm text-muted-foreground">
        Group Members
      </h3>

      <button
        onClick={() => setOpen(false)}
        className="text-sm text-primary"
      >
        Close
      </button>
    </div>

    {/* ADD USER SECTION */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addGroupMember(); // 👈 call here
        }}
        className="
          mb-4
          flex flex-col gap-2
          sm:flex-row sm:items-center
        "
      >
        <input
          type="text"
          placeholder="Enter name of new user"
          value={gname}
          onChange={(e) => setGname(e.target.value)}
          className="
            w-full
            px-4 py-2
            rounded-lg
            bg-muted
            border border-border
            text-sm
            outline-none
            focus:ring-2 focus:ring-primary
          "
        />

        <button
          type="submit"
          disabled={!gname.trim()}
          className="
            w-full sm:w-auto
            px-4 py-2
            rounded-lg
            bg-primary text-white
            text-sm
            hover:bg-primary/90
            disabled:opacity-50
          "
        >
          Add
        </button>
      </form>
  
    {/* MEMBERS LIST */}
    <div className="space-y-3">
      {members.map((m) => (
        <div
          key={m._id}
          className="
            group flex items-center justify-between
            p-3 rounded-xl
            bg-muted/40 hover:bg-muted
          "
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
              {m.name.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{m.name}</p>
              <p className="text-xs text-muted-foreground truncate">
                {m.email}
              </p>
            </div>
          </div>

          <div className="flex gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
            <button className="text-xs px-3 py-1 rounded-md bg-red-500/10 text-red-500" onClick={()=>removeUser(m._id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
)}





    </div>
  );
};

export default ChatHeader;
