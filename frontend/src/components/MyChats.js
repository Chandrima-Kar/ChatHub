import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { FaUserGroup } from "react-icons/fa6";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSender } from "../config/ChatLogics";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./Miscellaneous/GroupChatModal.js";
import { Button } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import { Avatar } from "@chakra-ui/react";

const MyChats = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();
  const toast = useToast();

  const fetchChats = async () => {
    if (!user) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setLoggedUser(userInfo);
    fetchChats();
  }, [fetchAgain, user]);

  return (
    <div
      className={`flex flex-col items-center p-3 bg-black rounded-lg border border-gray-700 ${
        selectedChat ? "hidden md:flex" : "flex"
      } md:w-[31%] w-full`}
    >
      <div className="pb-4 px-4 text-2xl md:text-3xl font-ubuntu w-full justify-between items-center text-white flex">
        My Chats
        <GroupChatModal>
          <Button
            className="flex text-xl md:text-sm lg:text-xl border-2 border-blue-500 xl:ml-10 mt-5 xl:mt-0 font-roboto"
            bg="[#010b14]"
            color="white"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.600" }}
            _focus={{ boxShadow: "outline" }}
            rightIcon={<AddIcon />}
          >
            New Group Chat
          </Button>
        </GroupChatModal>
      </div>
      <div className="flex flex-col bg-[#010b14] p-3 w-full h-full rounded-lg overflow-y-hidden">
        {chats ? (
          <Stack
            overflowY="scroll"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor="pointer"
                bg={selectedChat === chat ? "#38B2AC" : "black"}
                color={selectedChat === chat ? "black" : "white"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
              >
                <div className="flex flex-col">
                  {!chat.isGroupChat ? (
                    getSender(loggedUser, chat.users)
                  ) : (
                    <div className="flex flex-row">
                      {chat.chatName}

                      <FaUserGroup className="mt-1 ml-2" />
                    </div>
                  )}
                  {chat.latestMessage && chat.latestMessage.length > 0 && (
                    <div className="text-white text-sm flex-row">
                      {chat.latestMessage.map((message) => (
                        <div
                          key={message._id}
                          className="flex flex-row gap-x-2"
                        >
                          <Avatar
                            size="xs"
                            className="bg-black"
                            _hover={{
                              bg: "#010b14",
                              color: "white",
                            }}
                            cursor="pointer"
                            src={message.sender.pic}
                          />
                          <h1 className="text-sm text-blue-500 font-semibold">
                            {message.sender.name}:
                          </h1>
                          {message.content.length > 50
                            ? message.content.substring(0, 51) + "..."
                            : message.content}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </div>
    </div>
  );
};

export default MyChats;
