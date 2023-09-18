import "./info.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"
import info1 from "./../../images/info1.jpg"
import info2 from "./../../images/info2.png"



let siteData = [
  {
    title: "СУПЕР ТРОФЕО МИРОВОЙ ФИНАЛ",
    text1: "Мировой финал Lamborghini завершает каждый сезон Super Trofeo с 2013 года. Каждый год гонщики всех континентальных чемпионатов отправляются на разные трассы и принимают участие в двух 50-минутных спринтерских гонках, где определяется победитель в общем зачете. как чемпион мира Lamborghini. Мировой финал Lamborghini — это не только крупнейший гоночный уик-энд года, но и настоящий фестиваль автоспорта, который привлекает поклонников со всего мира.",
    text2: "Парад владельцев, превью и развлечения в паддоке для болельщиков — это лишь некоторые из мероприятий, организованных в рамках мероприятия.",
    image: "info1.jpg",
    imageStyle: "info_part--first",
    },

    {
    title: "КОМАНДЫ СУПЕР ТРОФЕО",
    text1: "Все автомобили, которые участвуют в чемпионатах Lamborghini Super Trofeo, управляются частными командами, которые используют свой опыт для тонкой настройки их для водителей. Для каждого континентального чемпионата Lamborghini Super Trofeo существуют рейтинги пилотов и команд.",
    text2: "Пилоты и команды, участвующие в континентальной серии, каждый год соревнуются друг с другом в Гранд Финале Lamborghini, мероприятии, которое завершает спортивный сезон Super Trofeo. Две квалификационные сессии и две гонки определяют чемпионов мира серии. Каждый год Гранд-финал проводится на разных трассах, и в прошлых выпусках он уже затрагивал европейский, азиатский и американский континенты.",
    image: "info2.png",
    imageStyle: "info_part--second",
    },
    {
    title: "календарь сезона Super Trofeo Europe 2022 года",
    text1: "14 в истории серии GT, посвященный автомобилям Lamborghini Huracan Super Trofeo Evo. Шесть этапов, в общей сложности 12 гонок и 600 минут соревнований будут разыграны на некоторых из самых престижных трасс Европы.",
    text2: "",
    image: "",
    imageStyle: "info_part--third",
        },
];



// function Container({ title, text1, text2, image, imageStyle}) {
//     return (
//         <div className="info_part"> 
//             {siteData.map((site) => <h3 className="info_title">{title}</h3>)}
//             <div className="info_part-textbox">
//                 {siteData.map((site) => <p className="info_text">{text1}</p>)}
//                 {siteData.map((site) => <b className="info_text">{text2}</b>)}
//             </div>
//             {siteData.map((site) => <img className="info_part-img">{image}</img>)}
//         </div>
      
//   );
// }

// function Container({ title, text1, text2, image, imageStyle}) {
//     return (       
//             {siteData.map((site) => <div className="info_part"><h3 className="info_title">{title}</h3>
//             <div className="info_part-textbox">
//                 <p className="info_text">{text1}</p>
//                 <b className="info_text">{text2}</b>
//                 <img className="info_part-img">{image}</img>
//                 </div></div>)}
        
//         );
// }

 
// export default Container;


// как правильно прописать таблицу?