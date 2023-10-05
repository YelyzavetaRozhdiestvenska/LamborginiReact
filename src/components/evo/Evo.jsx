import evoCar from "./../../images/evoCar.png"
import evoIcon from "./../../images/evoIcon.svg"
import "./evo.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"

function Evo({ children }) {
    
    return (
        <section className="evo">
        <div className="evo-black">
          <div className="container">
            <div className="evo-black_inner">
              <div className="evo-black_info">
                <h3 className="evo-black_title">СУПЕР ТРОФЕО ЭВО</h3>
                <div className="evo-black_infobox">
                  <p className="evo-black_text">
                    Новый Huracán Super Trofeo EVO достигает еще больших высот, чем его
                    прославленный предшественник, благодаря полностью переработанной
                    аэродинамике. Huracán Super Trofeo EVO является идеальной стартовой
                    площадкой для всех водителей, которые хотят начать карьеру в гонках
                    класса GT.
                  </p>
                  <p className="evo-black_text">
                    Huracán EVO — это эволюция самого успешного Lamborghini с двигателем
                    V10. В результате тонкой настройки и усовершенствования существующих
                    функций в сочетании с новыми конструктивными решениями, повышающими
                    производительность, автомобиль выделяется своей способностью
                    предугадывать и удовлетворять поведение, ожидания и желания водителя.
                  </p>
                </div>
              </div>
              <img
                className="evo-black_img"
                src={evoCar}
                alt="Huracán Super Trofeo EVO"
              />
              <dl className="evo_descr-list">
                <div>
                  <dd>ПЕРЕМЕЩЕНИЕ</dd>
                  <dt>5204 см³</dt>
                </div>
                <div>
                  <dd>КРУТЯЩИЙ МОМЕНТ</dd>
                  <dt>570 Нм при 6500 об/мин</dt>
                </div>
                <div>
                  <dd>МОЩНОСТЬ (л.с.) / МОЩНОСТЬ (КВТ)</dd>
                  <dt>620 л.с. при 8250 об/мин</dt>
                </div>
                <div>
                  <dd>МАКС. СКОРОСТЬ</dd>
                  <dt>325 км /ч</dt>
                </div>
                <div>
                  <dd>0-100 КМ/Ч</dd>
                  <dt>2,9 с</dt>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="evo-white">
          <div className="container">
            <div className="evo-white_inner">
              <p className="evo-white_text">
                Его неповторимый дизайн — это естественная эволюция культовых линий
                Huracán, включающая новые сложные решения, поднимающие производительность
                и вызывающие эмоции на невиданный ранее уровень.
              </p>
              <p className="evo-white_text">
                Беспрецедентный обвес был разработан инженерами отдела автоспорта
                Automobili Lamborghini в сотрудничестве с Dallara Engineering и
                Lamborghini Centro Stile. Последний также разработал стартовую ливрею для
                автомобиля в честь партнерства между Lamborghini Squadra Corse и Roger
                Dubuis, которое началось в 2018 году.
              </p>
              <p className="evo-white_text">
                Среди наиболее очевидных изменений в обвесе Lamborghini Huracan Super
                Trofeo EVO — задний спойлер на заднем капоте и верхний воздухозаборник,
                которые делают его мгновенно узнаваемым для зрителей.
              </p>
              <div className="evo-white_video">
                <a href="#" class="evo-white_video-link">
                    <img src={evoIcon} alt="" />
                  <span>смотреть онлайн</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Evo;


