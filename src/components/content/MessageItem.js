const MessageItem = ({ message }) => {
  return (
    <div className="listing">
      <div className="listing__content">
        <p>{message.firstName}</p>
        <p>{message.lastName}</p>
        <p>{message.email}</p>
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default MessageItem;
