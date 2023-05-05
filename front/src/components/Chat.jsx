import styles from '../styles/Chat.module.css';

function Chat() {
  return (
    <div className={styles.root}>
      <div className={styles.contactsDiv}>
        <nav className={styles.contactsNavbar}>
          <div className={styles.contactsInfo}>
            <p>Chats</p>
            <div className={styles.contactsInfoOptions}>
              <p>New</p>
              <p>...</p>
            </div>
          </div>
          <div className={styles.contactsSearchInput}>
            <input type="text" placeholder="Filter" />
          </div>
        </nav>
        {/* CONTACTS EXAMPLE */}
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <p className={styles.contactIcon}>icon</p>
            <div className={styles.contactUnit}>
              <div className={styles.contactName}>
                <p>user</p>
                <p>10:00</p>
              </div>
              <p className={styles.contactMessage}>message</p>
            </div>
          </div>
          <div className={styles.contact}>
            <p className={styles.contactIcon}>icon</p>
            <div className={styles.contactUnit}>
              <div className={styles.contactName}>
                <p>user</p>
                <p>10:00</p>
              </div>
              <p className={styles.contactMessage}>message</p>
            </div>
          </div>
          <div className={styles.contact}>
            <p className={styles.contactIcon}>icon</p>
            <div className={styles.contactUnit}>
              <div className={styles.contactName}>
                <p>user</p>
                <p>10:00</p>
              </div>
              <p className={styles.contactMessage}>message</p>
            </div>
          </div>
          <div className={styles.contact}>
            <p className={styles.contactIcon}>icon</p>
            <div className={styles.contactUnit}>
              <div className={styles.contactName}>
                <p>user</p>
                <p>10:00</p>
              </div>
              <p className={styles.contactMessage}>message</p>
            </div>
          </div>
          {/* CONTACTS EXAMPLE */}
        </div>
      </div>
      <div className={styles.messagesDiv}>
        <nav className={styles.messagesNavbar}>
          <div className={styles.messagesInfo}>
            <p>Icon</p>
            <p>Name</p>
          </div>
          <div className={styles.messagesOptions}>
            <p>New</p>
            <p>...</p>
          </div>
        </nav>
        <div className={styles.messages}>
          <div className={styles.messageSent}>
            <p>asdfasdfasdf</p>
          </div>
          <div className={styles.messageReceived}>
            <p>asdfasdfasdf</p>
          </div>
          <div className={styles.messageSent}>
            <p>asdfasdfasdf</p>
          </div>
          <div className={styles.messageSent}>
            <p>asdfasdfasdf</p>
          </div>
          <div className={styles.messageReceived}>
            <p>asdfasdfasdf</p>
          </div>
        </div>
        <div className={styles.messagesInput}>
          <p>Emoji</p>
          <p>Add</p>
          <input type="text" placeholder="Message" />
          <p>Voice</p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
