import styles from '../styles/Chat.module.css';

function Chat() {
  return (
    <div className={styles.root}>
      <div className={styles.contactsDiv}>
        <nav className={styles.contactsNavbar}>
          <p>asdfasdfasdf</p>
          <p>asdfasdfasdf</p>
        </nav>
        <div className={styles.contacts}>
          <p>asdfasdfasdf</p>
          <p>asdfasdfasdf</p>
          <p>asdfasdfasdf</p>
          <p>asdfasdfasdf</p>
        </div>
      </div>
      <div className={styles.messagesDiv}>
        <nav className={styles.messagesNavbar}>
          <p>asdfasdfasdf</p>
          <p>asdfasdfasdf</p>
        </nav>
        <div className={styles.messages}>
          <p>asdfasdfasdf</p>
          <p>asdfasdfasdf</p>
          <p>asdfasdfasdf</p>
          <p>asdfasdfasdf</p>
        </div>
        <div className={styles.messagesInput}>
          <p>asdfasdfasdf</p>
          <p>asdfasdfasdf</p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
