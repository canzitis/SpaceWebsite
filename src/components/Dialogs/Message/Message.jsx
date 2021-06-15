import classes from "../Dialogs.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={classes.message}>{props.talk}</div>
    </div>
  );
};

export default Message;