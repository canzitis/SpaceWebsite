import DialogItem from "./DialogItem/DialogsItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import { Redirect } from "react-router";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  const dialogs = state.dialogs.map((d) => (
    <DialogItem id={d.id} key={d.id} img={d.img} name={d.name} />
  ));
  const messages = state.messages.map((m) => (
    <Message id={m.id} key={m.id} talk={m.talk} />
  ));

  let newMessageBody = state.newMessageBody;

  let oneSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogs}</div>
      <div className={classes.messages}>
        {messages}
        <div className={classes.messageUser}>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
            className={classes.messageTextarea}
          ></textarea>
        </div>
        <div>
          <button
            onClick={oneSendMessageClick}
            className={classes.messageButton}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
