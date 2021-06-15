import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import newsReducer from "./news-reducer";

let store = {
  _state: {
    profilePage: {
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
    },

    dialogsPage: {
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
    },
    newsPage: {
      news: [
        {
          id: 1,
          news:
            "Илон Маск заявил об уходе и передаче своих дел Зеленину Максиму",
          img:
            "https://im.kommersant.ru/Issues.photo/CORP/2018/02/10/KMO_162543_01417_1_t218_180244.jpg",
          liks: 128,
        },
        {
          id: 2,
          news: "На Марсе заканчивают строительство 4 мегаполиса",
          img: "https://hi-news.ru/wp-content/uploads/2019/08/marses.jpg",
          liks: 326,
        },
        {
          id: 3,
          news: "Apple запускает свои автобусные корабли Земля-Марс",
          img:
            "https://russorosso.ru/wp-content/uploads/2019/10/foundation_1-e1571833750814-1280x620.jpg",
          liks: 94,
        },
        {
          id: 3,
          news: "Наблюдается маштабное изменение климата на планете Земля",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94QgH1YOTdAMNVAreZLqFmqoMFAyLMkeRUQ&usqp=CAU",
          liks: 231,
        },
      ],
      comments: [
        {
          id: 1,
          ava:
            "https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg",
          comment: "Лучше бы передали Навальному",
        },
        {
          id: 1,
          ava: "https://tamgdeya.ru/photos/norm/1/1_wO3vCsis.jpg",
          comment: "Ага",
        },
        {
          id: 2,
          ava:
            "https://cs6.pikabu.ru/post_img/big/2015/08/05/8/1438782769_1348167913.jpg",
          comment: "Опять свои города строят! Достали!!",
        },
        {
          id: 2,
          ava:
            "https://shutniki.club/wp-content/uploads/2019/12/prikolnye_foto_babushek_dlya_avatarki_10_05132721.jpg",
          comment: "Не говори.. Покоя нет от них.",
        },
        {
          id: 2,
          ava:
            "https://static.kulturologia.ru/files/u23581/i285415639328061572_szw1280h1280_.jpg",
          comment: "Главное,чтобы молодежь в окна бластерами не светили",
        },
        {
          id: 3,
          ava:
            "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
          comment: "Лучше бы батарейку норм сделали. Лол.",
        },
        {
          id: 3,
          ava:
            "https://icdn.lenta.ru/images/0000/0300/000003001034/pic_1368783017.jpg",
          comment: "Андроид РУЛИТ!!",
        },
        {
          id: 4,
          ava:
            "https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg",
          comment: "Мы все умрем!! АААА",
        },
        {
          id: 4,
          ava:
            "https://demiart.ru/forum/journal_uploads13/j2406363_1591724080_0.jpg",
          comment: "Я купил билет на Марс. Улетаю!",
        },
        {
          id: 4,
          ava:
            "https://media.istockphoto.com/vectors/emo-avatar-vector-id467805648?k=6&m=467805648&s=170667a&w=0&h=Pcwwai3DVZ3L5HIU07IbCoHNPiv7ynq-gR4hSDXMk4E=",
          comment: "Наконец-то мы все умрем",
        },
        {
          id: 4,
          ava:
            "https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg",
          comment: "Куплю место на ракете. НЕДОРОГО!",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.newsPage = newsReducer(this._state.newsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
