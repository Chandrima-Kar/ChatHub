import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";

const ChatPage = () => {
  const { user } = ChatState();

  return;
  <div className="w-full ">
    {/* {user &&<SideDrawer/>} */}

    <div id="box">
      {/* {user && <MyChats/> } */}
      {/* {user && <ChatBox/>} */}
    </div>
  </div>;
};

export default ChatPage;
