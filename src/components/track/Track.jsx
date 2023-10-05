import track from "./../../images/track.png"
import "./track.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"


function Track({ children }) {
    
    return (
        <section className="track">
        <div className="container">
          <div className="track_inner">
            <h3 className="track_tittle">ТРЕК ПОРТИМАО</h3>
            <p className="track_text">Autodromo Internacional do Algarve находится в одноименном регионе на юге
              Португалии, недалеко от города Портиман. Открытый в октябре 2008 года
              автогоночный комплекс является одним из самых современных в Европе,
              раскинувшись на площади около 300 гектаров среди холмов, окружающих
              португальский город, а длина самой трассы составляет 4684 метра.</p>
            <img src={track} alt="" />
            </div>
        </div>
        </section>
    );
}

export default Track;