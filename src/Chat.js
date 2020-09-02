import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFile from "@material-ui/icons/AttachFile";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    console.log(input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3> Room Name</h3>
          <p> Last seen at....</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Alexandre Erard</span>
          Hey guys
          <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
