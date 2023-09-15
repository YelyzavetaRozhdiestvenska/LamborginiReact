import arrow from "./../../images/arrow.svg"
import "./promo.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"




function Promo({ children }) {
    
    return (
        <section className="promo">
        <div className="big-container">
          <div className="promo_inner">
            <h1 className="title">LAMBORGHINI SUPER TROFEO</h1>
            <h2 className="subtitle">
              { children }
            </h2>
            <p className="promo_text">автодром Портимао,Португалия</p>
            <a href="#" className="promo_arrow">
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
      </section>
    );
}

export default Promo;