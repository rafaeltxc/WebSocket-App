import styles from '../styles/Chat.module.css';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';

import userDefault from '../images/user-default-profile.png';

function Chat() {
  return (
    <div className={styles.root}>
      <div className={styles.contactsDiv}>
        <nav className={styles.contactsNavbar}>
          <div className={styles.contactsInfo}>
            <p>Chats</p>
            <div className={styles.contactsInfoOptions}>
              <button className={styles.button}>
                <RateReviewOutlinedIcon />
              </button>
              <button className={styles.button}>
                <MoreVertOutlinedIcon />
              </button>
            </div>
          </div>
          <div className={styles.contactsSearchInput}>
            <SearchOutlinedIcon className={styles.inputIcon} />
            <input type="text" placeholder="Filter" />
          </div>
        </nav>
        <div className={styles.contacts}>
          {/* CONTACTS EXAMPLE */}
          <button className={styles.contact}>
            <img
              className={styles.contactIcon}
              src={userDefault}
              alt="User profile picture"
            />
            <div className={styles.contactUnit}>
              <div className={styles.contactName}>
                <p className={styles.contactUsername}>user</p>
                <p>10:00</p>
              </div>
              <p className={styles.contactMessage}>message</p>
            </div>
          </button>
          <button className={styles.contact}>
            <img
              className={styles.contactIcon}
              src={userDefault}
              alt="User profile picture"
            />
            <div className={styles.contactUnit}>
              <div className={styles.contactName}>
                <p className={styles.contactUsername}>user</p>
                <p>10:00</p>
              </div>
              <p className={styles.contactMessage}>message</p>
            </div>
          </button>
          {/* CONTACTS EXAMPLE */}
        </div>
      </div>
      <div className={styles.messagesDiv}>
        <nav className={styles.messagesNavbar}>
          <div className={styles.messagesInfo}>
            <img
              className={styles.contactIcon}
              src={userDefault}
              alt="User profile picture"
            />
            <p className={styles.contactUsername}>user</p>
          </div>
          <div className={styles.messagesOptions}>
            <button className={styles.button}>
              <MoreVertOutlinedIcon />
            </button>
          </div>
        </nav>
        <div className={styles.messages}>
          {/* // Messages Examples */}
          <div className={styles.messageSent}>
            <div className={styles.messageSentP}>
              <p>
                asdfasdfaasdasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdasdasdsdf
              </p>
            </div>
          </div>
          <div className={styles.messageSent}>
            <div className={styles.messageSentP}>
              <p>asdfasdfasdfdfasdf</p>
            </div>
          </div>
          <div className={styles.messageReceived}>
            <div className={styles.messageReceivedP}>
              <p>asdfasdfasdsadffasdfasdfasdfasdfafsdfasdfasasdfasdfasdff</p>
            </div>
          </div>
          <div className={styles.messageSent}>
            <div className={styles.messageSentP}>
              <p>asdfasdfasdf</p>
            </div>
          </div>
          <div className={styles.messageReceived}>
            <div className={styles.messageReceivedP}>
              <p>asdfasdfasdf</p>
            </div>
          </div>
          <div className={styles.messageSent}>
            <div className={styles.messageSentP}>
              <p>
                asdfasdfaasdasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdasdasdsdf
              </p>
            </div>
          </div>
          <div className={styles.messageSent}>
            <div className={styles.messageSentP}>
              <p>asdfasdfasdfdfasdf</p>
            </div>
          </div>
          <div className={styles.messageReceived}>
            <div className={styles.messageReceivedP}>
              <p>asdfasdfasdsadffasdfasdfasdfasdfafsdfasdfasasdfasdfasdff</p>
            </div>
          </div>
          <div className={styles.messageSent}>
            <div className={styles.messageSentP}>
              <p>asdfasdfasdf</p>
            </div>
          </div>
          <div className={styles.messageReceived}>
            <div className={styles.messageReceivedP}>
              <p>asdfasdfasdf</p>
            </div>
          </div>
          {/* // Messages Examples */}
        </div>
        <div className={styles.messagesInput}>
          <button className={styles.button}>
            <SentimentSatisfiedAltIcon />
          </button>
          <button className={styles.button}>
            <AttachFileIcon />
          </button>

          <input type="text" placeholder="Message" />
          <button className={styles.button}>
            <MicIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
