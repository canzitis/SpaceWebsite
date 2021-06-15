import PreLoader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";

const lookingForAJobs =
  "https://emojitool.ru/img/facebook/4.0/thumbs-up-sign-1689.png";
const notLookingForJobs =
  "https://emojitool.ru/img/facebook/4.0/thumbs-down-sign-1695.png";

const ProfileInfo = (props) => {
  if (!props.profile) return <PreLoader />;

  return (
    <div>
      <div className="profInfo"></div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <div>About Me: {props.profile.aboutMe} </div>
        <div>Facebook: {props.profile.contacts.facebook}</div>
        <div>VK: {props.profile.contacts.vk}</div>
        <div>Instagram: {props.profile.contacts.instagram}</div>
        <div>
          looking for a jobs:
          <img
            className={classes.jobsImg}
            src={
              (props.profile.lookingForAJob = true
                ? lookingForAJobs
                : notLookingForJobs)
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
