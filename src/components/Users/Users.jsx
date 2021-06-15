import React from "react";
import classes from "./Users.module.css";
import userAvatar from "../../assets/images/defaultAvatar.jpg";
import { NavLink, Redirect } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  console.log(pagesCount);

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div className={classes.usersWindows}>
      {pages.map((p) => {
        return (
          <div className={classes.numberPage}>
            <button
              className={props.currentPage === p && classes.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </button>
          </div>
        );
      })}
      {props.users.map((u) => (
        <div className={classes.users} key={u.id}>
          <span>
            <div className={classes.avatar}>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userAvatar}
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  className={classes.followedBtn}
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  className={classes.followedBtn}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div className={classes.fullName}>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{u.location.city}</div> */}
              {/* <div>{u.location.country}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
