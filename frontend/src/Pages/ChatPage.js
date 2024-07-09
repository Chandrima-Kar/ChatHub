import { useState } from "react";
import Chatbox from "../components/ChatBox.js";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/Miscellaneous/SideDrawer.js";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div className="w-full flex flex-col h-[100vh] bg-black overflow-y-hidden">
      {user && <SideDrawer />}
      <div className="flex justify-between w-full p-10 flex-row h-[91.5vh]">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </div>
    </div>
  );
};

export default Chatpage;
