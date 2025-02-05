import { ViewIcon } from "@chakra-ui/icons";
import { MdOutlineEdit } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const EditProfile = () => {};

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          className="flex"
          bg="[#010b14]"
          color="white"
          _hover={{ bg: "gray.700" }}
          _active={{ bg: "gray.600" }}
          icon={
            <HiOutlineDotsVertical className="bg-gray.700 text-white w-6 h-6" />
          }
          onClick={onOpen}
        />
      )}
      <Modal
        size="md"
        className=""
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent className="h-[350px]">
          <ModalHeader className="flex justify-center bg-[#010b14]">
            <div className="text-2xl font-roboto text-white">{user.name}</div>
          </ModalHeader>
          <ModalCloseButton className="text-white" />
          <ModalBody className="flex flex-col items-center justify-between bg-[#010b14] ">
            <Image
              className="rounded-full w-36 h-36 object-cover "
              src={user.pic}
              alt={user.name}
            />
            <div className="text-lg md:text-xl font-semibold font-lato text-white tracking-wider">
              Email: {user.email}
            </div>
          </ModalBody>
          <ModalFooter className="bg-[#010b14] flex flex-row gap-x-52">
            <Button
              bg={"black"}
              textColor={"white"}
              _hover={{ bg: "gray.700" }}
              _active={{ bg: "gray.600" }}
              className="font-ubuntu"
              onClick={EditProfile}
            >
              Edit Profile
              <MdOutlineEdit className="w-12 h-12" />
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
