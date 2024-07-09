import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { getSender } from "../config/ChatLogics";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./Miscellaneous/GroupChatModal.js";
import { Button } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

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
      console.log(data);
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
    // eslint-disable-next-line
  }, [fetchAgain, user]);

  return (
    <div
      className={`flex flex-col items-center p-3 bg-black rounded-lg border border-gray-700
      ${selectedChat ? "hidden md:flex" : "flex"} md:w-[31%] w-full`}
    >
      <div
        className="pb-4 px-4 text-2xl md:text-3xl font-ubuntu w-full justify-between items-center text-white"
        // pb={3}
        // px={4}
        // fontSize={{ base: "28px", md: "30px" }}
        // fontFamily="Work sans"
        // display="flex"
        // w="100%"
        // justifyContent="space-between"
        // alignItems="center"
        // textColor={"white"}
      >
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
      <div
        className="flex flex-col bg-[#010b14] p-3 w-full h-full rounded-lg overflow-y-hidden"
        // display="flex"
        // flexDirection="column"
        // p={3}
        // bg="black"
        // w="100%"
        // h="100%"
        // borderRadius="lg"
        // overflowY="hidden"
      >
        {chats ? (
          <Stack
            overflowY="scroll"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none" /* IE and Edge */,
              "scrollbar-width": "none" /* Firefox */,
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
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
                {chat.latestMessage && chat.latestMessage.sender && (
                  <Text fontSize="xs">
                    <b>{chat.latestMessage.sender.name} : </b>
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..."
                      : chat.latestMessage.content}
                  </Text>
                )}
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
