const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let instalState = {
  messages: [
    { id: 1, talk: "Че? В зал сегодня летим?" },
    { id: 2, talk: "Сегодня Луна зашла за Сатурн. Так романтично." },
    { id: 3, talk: "Здорова. Как дела? Как жизнь?." },
    { id: 4, talk: "Вчера инст проходил на Луне" },
    { id: 5, talk: "Давай на след неделе сходим в баню к кратеру" },
    { id: 6, talk: "Вчера метеорит купил на аукционе" },
  ],
  dialogs: [
    {
      id: 1,
      img:
        "https://sun1.informsvyaz.userapi.com/impf/c637821/v637821128/5699d/hJh6FBlhREU.jpg?size=100x0&quality=96&crop=192,192,1533,1533&sign=ecd88a5886696a32cf00e9612543f8c7&ava=1",
      name: "Andrew",
    },
    {
      id: 2,
      img:
        "https://sun2.informsvyaz.userapi.com/impg/MwOdblkqqWiMLD3g76r4OBIn1fhNHGFsHeOGDA/XNH4QjZFjNU.jpg?size=100x0&quality=96&crop=141,496,1326,1326&sign=001a3bac868fa8dad796252918055f48&ava=1",
      name: "Elena",
    },
    {
      id: 3,
      img:
        "https://sun1.informsvyaz.userapi.com/impf/lxSzXtZpFynhQHQl-wyjY7nvIXr_smpx8GfDeA/TWN8WvaYvQE.jpg?size=100x0&quality=96&crop=71,287,1465,1465&sign=dc5c6ca6333af85fc01c10607875ccba&ava=1",
      name: "Vladimir",
    },
    {
      id: 4,
      img:
        "https://sun2.informsvyaz.userapi.com/impf/c638927/v638927529/348bc/aMR_a9h8iGs.jpg?size=100x0&quality=96&crop=66,66,367,367&sign=01d8f4cf7e4546746acbe0e17309118d&ava=1",
      name: "Artem",
    },
    {
      id: 5,
      img:
        "https://sun1.informsvyaz.userapi.com/impf/c846218/v846218902/b0736/4QEXAkYfqoY.jpg?size=100x0&quality=96&crop=186,316,1434,1434&sign=5a1c1335603745043f1f9e9d1c471e31&ava=1",
      name: "Fedor",
    },
    {
      id: 6,
      img:
        "https://sun9-43.userapi.com/impf/_BuIKpEtKgqD3PGNIOtRyQF_eLyVoFZFHKSx5w/eCHPu7EpsL8.jpg?size=1280x1920&quality=96&proxy=1&sign=3b220d65200657757cd2df400c2f5a6e",
      name: "Sergei",
    },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = instalState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body,
      };
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 7, talk: body }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default dialogsReducer;
