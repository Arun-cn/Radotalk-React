import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import io from "socket.io-client";
import FriendsList from "../components/FriendsList";
import ChatView from "../components/ChatView";
import MessageInput from "../components/MessageInput";

const socket = io("http://localhost:3000");

const ChatPage = () => {
  const { user } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  useEffect(() => {
    socket.emit("join", { userId: user.id });
    socket.on("friendsList", (data) => setFriends(data));
    socket.on("message", (message) =>
      setMessages((prev) => [...prev, message])
    );
  }, [user.id]);

  const sendMessage = (message) => {
    socket.emit("message", { to: selectedFriend, message });
  };

  return (
    <div>
      <FriendsList friends={friends} setSelectedFriend={setSelectedFriend} />
      {selectedFriend && (
        <>
          <ChatView messages={messages} />
          <MessageInput sendMessage={sendMessage} />
        </>
      )}
    </div>
  );
};

export default ChatPage;
