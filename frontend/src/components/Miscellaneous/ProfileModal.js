import { ViewIcon } from "@chakra-ui/icons";
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

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
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
            <div className="text-lg md:text-3xl font-semibold font-lato text-white tracking-wider">
              Email: {user.email}
            </div>
          </ModalBody>
          <ModalFooter className="bg-[#010b14]">
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
