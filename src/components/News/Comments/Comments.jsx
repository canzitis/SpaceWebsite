// const Comments = () => {
//   const commentsData = [
//     {
//       id: 1,
//       ava:
//         "https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg",
//       comment: "Лучшебы передали Навальному",
//     },
//     {
//       id: 1,
//       ava: "https://tamgdeya.ru/photos/norm/1/1_wO3vCsis.jpg",
//       comment: "Ага",
//     },
//     {
//       id: 2,
//       ava:
//         "https://cs6.pikabu.ru/post_img/big/2015/08/05/8/1438782769_1348167913.jpg",
//       comment: "Опять свои города строят! Достали!!",
//     },
//     {
//       id: 2,
//       ava:
//         "https://shutniki.club/wp-content/uploads/2019/12/prikolnye_foto_babushek_dlya_avatarki_10_05132721.jpg",
//       comment: "Не говори.. Покоя нет от них.",
//     },
//     {
//       id: 2,
//       ava:
//         "https://static.kulturologia.ru/files/u23581/i285415639328061572_szw1280h1280_.jpg",
//       comment: "Главное,чтобы молодежь в окна бластерами не светили",
//     },
//     {
//       id: 3,
//       ava:
//         "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
//       comment: "Лучше бы батарейку норм сделали. Лол.",
//     },
//     {
//       id: 3,
//       ava:
//         "https://icdn.lenta.ru/images/0000/0300/000003001034/pic_1368783017.jpg",
//       comment: "Андроид РУЛИТ!!",
//     },
//     {
//       id: 4,
//       ava:
//         "https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg",
//       comment: "Мы все умрем!! АААА",
//     },
//     {
//       id: 4,
//       ava:
//         "https://demiart.ru/forum/journal_uploads13/j2406363_1591724080_0.jpg",
//       comment: "Я купил билет на марс. Улетаю!",
//     },
//     {
//       id: 4,
//       ava:
//         "https://media.istockphoto.com/vectors/emo-avatar-vector-id467805648?k=6&m=467805648&s=170667a&w=0&h=Pcwwai3DVZ3L5HIU07IbCoHNPiv7ynq-gR4hSDXMk4E=",
//       comment: "Наконец-то мы все умрем",
//     },
//     {
//       id: 4,
//       ava:
//         "https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg",
//       comment: "Куплю место на ракете. НЕДОРОГО!",
//     },
//   ];

//   const commets = commentsData.map((c) => (
//     <CommentsItem ava={c.ava} comment={c.comment} id={c.id} />
//   ));
//   return (
//     <div>
//       <div>{commets}</div>
//     </div>
//   );
// };

// export default Comments;

const Comments = (props) => {
  return (
    <div>
      <img src={props.ava} />
      {props.comment}
    </div>
  );
};

export default Comments;
