import "./info.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"
import Container from "./Container.jsx"
import info1 from "./../../images/info1.jpg"
import info2 from "./../../images/info2.png"
import info3 from "./../../images/info3.png"
import Info_partFirst from "./InfoStyles.jsx"
import Info_partSecond from "./InfoStyles.jsx"
import Info_partThird from "./InfoStyles.jsx"
import imageStyle from "./InfoStyles.jsx"


let siteData = [
  {
    title: "СУПЕР ТРОФЕО МИРОВОЙ ФИНАЛ",
    text1: "Мировой финал Lamborghini завершает каждый сезон Super Trofeo с 2013 года. Каждый год гонщики всех континентальных чемпионатов отправляются на разные трассы и принимают участие в двух 50-минутных спринтерских гонках, где определяется победитель в общем зачете. как чемпион мира Lamborghini. Мировой финал Lamborghini — это не только крупнейший гоночный уик-энд года, но и настоящий фестиваль автоспорта, который привлекает поклонников со всего мира.",
    text2: "Парад владельцев, превью и развлечения в паддоке для болельщиков — это лишь некоторые из мероприятий, организованных в рамках мероприятия.",
    image: info1,
    imageStyle: Info_partFirst,
    },

    {
    title: "КОМАНДЫ СУПЕР ТРОФЕО",
    text1: "Все автомобили, которые участвуют в чемпионатах Lamborghini Super Trofeo, управляются частными командами, которые используют свой опыт для тонкой настройки их для водителей. Для каждого континентального чемпионата Lamborghini Super Trofeo существуют рейтинги пилотов и команд.",
    text2: "Пилоты и команды, участвующие в континентальной серии, каждый год соревнуются друг с другом в Гранд Финале Lamborghini, мероприятии, которое завершает спортивный сезон Super Trofeo. Две квалификационные сессии и две гонки определяют чемпионов мира серии. Каждый год Гранд-финал проводится на разных трассах, и в прошлых выпусках он уже затрагивал европейский, азиатский и американский континенты.",
    image: info2,
    imageStyle: Info_partSecond,
    },
    {
    title: "календарь сезона Super Trofeo Europe 2022 года",
    text1: "14 в истории серии GT, посвященный автомобилям Lamborghini Huracan Super Trofeo Evo. Шесть этапов, в общей сложности 12 гонок и 600 минут соревнований будут разыграны на некоторых из самых престижных трасс Европы.",
    text2: "",
    image: info3,
    imageStyle: Info_partThird,
        },
];




function Info() {

    return (
        <div className="container">{siteData.map((data) => <Container>{data}</Container>)}</div>
    )
}

export default Info;