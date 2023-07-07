import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import styles from "../styles/Chat.module.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";

import User from "../components/User/User.jsx";
import UserOnlyName from "../components/UserOnlyName/UserOnlyName.jsx"

import { useState } from "react";

function Chat() {
  const [userIcon, setUserIcon] = useState(null);
  const [filter, setFilter] = useState("");

  function handlerFilter(event) {
    setFilter(event.target.value);
  }

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
            <input
              type="text"
              placeholder="Filter"
              value={filter}
              onChange={(event) => handlerFilter(event)}
            />
          </div>
        </nav>
        <div className={styles.contacts}>
          {/* CONTACTS EXAMPLE */}
          <User
            username={"User"}
            message={"Last Message"}
            messageTime={"10:00"}
          />
          <User
            username={"User"}
            message={"Last Message"}
            messageTime={"10:00"}
          />
          {/* CONTACTS EXAMPLE */}
        </div>
      </div>
      <div className={styles.messagesDiv}>
        <nav className={styles.messagesNavbar}>
          <UserOnlyName icon={userIcon} username={"user"} />
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

