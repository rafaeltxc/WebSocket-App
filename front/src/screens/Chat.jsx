import styles from "../styles/Chat.module.css";

// Icons
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";

// Components
import User from "../components/User/User.jsx";
import UserOnlyName from "../components/UserOnlyName/UserOnlyName.jsx"
import Message from "../components/Message/Message";
import Icon from "../components/Icon/Icon.jsx";

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
              <Icon icon={<RateReviewOutlinedIcon />} />
              <Icon icon={<MoreVertOutlinedIcon />} />
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
            message={"Another Last Message"}
            messageTime={"10:00"}
          />
          {/* CONTACTS EXAMPLE */}
        </div>
      </div>
      <div className={styles.messagesDiv}>
        <nav className={styles.messagesNavbar}>
          <UserOnlyName icon={userIcon} username={"user"} />
          <Icon icon={<MoreVertOutlinedIcon />} />
        </nav>
        <div className={styles.messages}>
          {/* // Messages Examples */}
          <Message message={"asd"} received={true} />
          <Message message={"asd"} received={true} />
          <Message message={"asd"} received={false} />
          <Message message={"asd"} received={true} />
          <Message message={"asd"} received={false} />
          <Message message={"asd"} received={false} />
          <Message message={"asd"} received={true} />
          {/* // Messages Examples */}
        </div>
        <div className={styles.messagesInput}>
          <Icon icon={<SentimentSatisfiedAltIcon />} />
          <Icon icon={<AttachFileIcon />} />

          <input type="text" placeholder="Message" />
          <Icon icon={<MicIcon />} />
        </div>
      </div>
    </div>
  );
}
export default Chat;

