import blogOne from "./../../images/blogOne.jpg"
import blogTwo from "./../../images/blogTwo.jpg"
import arrowLeft from "./../../images/arrowLeft.svg"
import arrowRight from "./../../images/arrowRight.svg"
import quote from "./../../images/quote.png"
import "./blog.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"




function Blog({ children }) {
    
    return (
      <section className="blog">
        <div className="container">
          <h3 className="blog_title">БЛОГ</h3>
          <div className="blog_slider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide blog_item">
                <img className="blog_item-img" src={blogOne} alt="" />
                <h4 className="blog_item-title">
                  НЕЛЬСОН ПИКЕ СТАЛ ПОБЕДИТЕЛЕМ ГРАНД-ФИНАЛА В ПОРТИМАНЕ
                </h4>
                <p className="blog_item-text">
                  Нельсон Пике-младший из Ansa Motorsports обеспечил возвращение титула
                  Lamborghini Super Trofeo Grand Finals в Северную Америку впервые с 2017
                  года после победы и второе место в паре 50-минутных гонок на Autodromo
                  Nacionale do Algarve в Портимане.Между тем, титул Pro-Am был подорван,
                  поскольку Брайан Ортис и Себастьян Карасо из..
                </p>
                <a href="#" className="blog_item-link">читать подробнее...</a>
              </div>
              <div className="swiper-slide blog_item">
                <img className="blog_item-img" src={blogTwo} alt="" />
                <h4 className="blog_item-title">ГРАНД ФИНАЛ. ДЕНЬ 1</h4>
                <p className="blog_item-text">
                  Утренний дождь означал, что мокрая гонка была объявлена ​​до старта, и
                  перед большинством экипажей стоял выбор: использовать слики или мокрые
                  шины. Большинство участников предпочли мокрую трассу, но поулист
                  Спинелли начал гонку на сликах и сразу же поплатился за это. Huracan №
                  61 опустился вниз, заняв всего 28-е место, поскольку..
                </p>
                <a href="#" className="blog_item-link">читать подробнее...</a>
              </div>
              <div className="swiper-slide blog_item">
                <img className="blog_item-img" src={blogOne} alt="" />
                <h4 className="blog_item-title">
                  НЕЛЬСОН ПИКЕ СТАЛ ПОБЕДИТЕЛЕМ ГРАНД-ФИНАЛА В ПОРТИМАНЕ
                </h4>
                <p className="blog_item-text">
                  Нельсон Пике-младший из Ansa Motorsports обеспечил возвращение титула
                  Lamborghini Super Trofeo Grand Finals в Северную Америку впервые с 2017
                  года после победы и второе место в паре 50-минутных гонок на Autodromo
                  Nacionale do Algarve в Портимане.Между тем, титул Pro-Am был подорван,
                  поскольку Брайан Ортис и Себастьян Карасо из..
                </p>
                <a href="#" class="blog_item-link">читать подробнее...</a>
              </div>
              <div className="swiper-slide blog_item">
                <img className="blog_item-img" src={blogTwo} alt="" />
                <h4 className="blog_item-title">ГРАНД ФИНАЛ. ДЕНЬ 1</h4>
                <p className="blog_item-text">
                  Утренний дождь означал, что мокрая гонка была объявлена ​​до старта, и
                  перед большинством экипажей стоял выбор: использовать слики или мокрые
                  шины. Большинство участников предпочли мокрую трассу, но поулист
                  Спинелли начал гонку на сликах и сразу же поплатился за это. Huracan №
                  61 опустился вниз, заняв всего 28-е место, поскольку..
                </p>
                <a href="#" class="blog_item-link">читать подробнее...</a>
              </div>
            </div>
            <div className="blog_button swiper-button-left">
              <img src={arrowLeft} alt="" />
            </div>
            <div className="blog_button swiper-button-right">
              <img src={arrowRight} alt="" />
            </div>
          </div>

          <div className="blog_quote">
            <div className="blog_quote-box">
              <blockquote className="blockquote">
                <cite className="blockquote_name">
                  <span>Чемпион Am</span>Анджей Левандовски
                </cite>
                <p className="blockquote_text">
                  «Я очень доволен титулом, моей второй победой в Am и четвертой в Super
                  Trofeo, мне очень приятно делать это в этом году, потому что уровень
                  соревнований очень высок. Должен сказать, сегодня было довольно легко,
                  так как я все время контролировал ситуацию».
                </p>
              </blockquote>
              <blockquote className="blockquote">
                <cite className="blockquote_name">
                  <span>Обладатель кубка Lamborghini</span>Жерар ван дер Хорст
                </cite>
                <p className="blockquote_text">
                  «Я очень доволен титулом, моей второй победой в Am и четвертой в Super
                  Trofeo, мне очень приятно делать это в этом году, потому что уровень
                  соревнований очень высок. Должен Обладатель кубка Lamborghini добавил:
                  «Здорово выиграть титул, спустя четыре года после последнего,...
                </p>
              </blockquote>
            </div>
            <img className="blog_quote-img" src={quote} alt="" />
          </div>
        </div>
      </section>
    );
}

export default Blog;