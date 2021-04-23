const MessageItem = ({ message }) => {
  return (
    <div className="listing">
      <div className="listing__content">
        <ul>
          <li>{message.firstName}</li>
          <li>{message.lastName}</li>
          <li>{message.email}</li>
          <li>{message.message}</li>
        </ul>
      </div>
    </div>
  );
};

export default MessageItem;
