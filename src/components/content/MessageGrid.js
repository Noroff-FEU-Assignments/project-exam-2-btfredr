import MessageItem from "./MessageItem";

const ContentGrid = ({ messages, isLoading }) => {
  return isLoading ? (
    <h1>Please wait... Content is loading</h1>
  ) : (
    <section className="listings">
      {messages.map((message) => (
        <MessageItem key={message.firstName} message={message}></MessageItem>
      ))}
    </section>
  );
};

export default ContentGrid;
