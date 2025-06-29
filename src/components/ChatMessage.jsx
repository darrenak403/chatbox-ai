import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({chat}) => {
  return (
    <div
      className={`messages ${chat.role === "model" ? "bot" : "user"}-messages`}
    >
      {chat.role === "model" && <ChatbotIcon />}
      <p className="messages-text">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;
