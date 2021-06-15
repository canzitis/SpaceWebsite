import News from "../components/News/News";
let instalState = {
  news: [
    {
      id: 1,
      news: "Илон Маск заявил об уходе и передаче своих дел Зеленину Максиму",
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
};

const newsReducer = (state = instalState, action) => {
  return state;
};

export default newsReducer;
