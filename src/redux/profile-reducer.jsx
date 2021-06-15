import { usersAPI } from "../api/api";

const ADD_POSTS = "ADD-POSTS";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let instalState = {
  posts: [
    {
      message: "Здравствуйте. Сколько стоит билет в один конец?",
      liksCount: 4,
      imgAva:
        "https://pbs.twimg.com/profile_images/428975819571335168/Qg3FkfEe.jpeg",
    },
    {
      message: "Летат на Сатурн с семьей. Все понравилось.",
      liksCount: 15,
      imgAva:
        "https://media.istockphoto.com/vectors/man-portrait-face-icon-web-avatar-flat-style-vector-vector-id641955760",
    },
    {
      message: "Здорофф !! Я только прилетел. Круто!!",
      liksCount: 43,
      imgAva:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Oq_7ZCrPj6A_5aluuvFH3IEGu3jEvjtUSQ&usqp=CAU",
    },
    {
      message:
        "Слышала, что Иллон Маск запускает новую ветвь. Вокруг солнца за 80 дней.",
      liksCount: 31,
      imgAva:
        "https://img.freepik.com/free-vector/avatar-woman-with-glasses_8462-2.jpg?size=338&ext=jpg",
    },
    {
      message:
        "Были в полете,пролетали мимо кометы. Загадали желание и сбылось всё!  ЕЕХХУУ!!",
      liksCount: 69,
      imgAva:
        "https://i.pinimg.com/originals/3a/38/f0/3a38f0f16b2cdf0c63ceb16538984081.jpg",
    },
  ],
  newPostText: "Здравствуйте,",
  profile: null,
};

const profileReducer = (state = instalState, action) => {
  switch (action.type) {
    case ADD_POSTS: {
      let newPost = {
        message: state.newPostText,
        imgAva:
          "https://avatarko.ru/img/kartinka/32/muzhchina_computer_31623.jpg",
        liksCount: 0,
      };

      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POSTS,
  };
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getUsers(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
