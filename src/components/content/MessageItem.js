const MessageItem = ({ message }) => {
  return (
    <div className="message">
      <div className="message__content">
        <label>Name:</label>
        <p>
          {message.firstName} {message.lastName}
        </p>
        <label>Email:</label>
        <p>{message.email}</p>
        <label>Message:</label>
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default MessageItem;
