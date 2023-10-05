import youtube from "./../../images/youtube.svg"
import instagram from "./../../images/instagram.svg"
import facebook from "./../../images/facebook.svg"
import logoFooter from "./../../images/logoFooter.svg"

import "./footer.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"

 function Footer({children}) {
    
     return (
         <footer className="footer">
      <div className="container">
        <h3 className="footer_title">КОНТАКТЫ</h3>
        <div className="footer_top">
          <ul className="footer_info">
            <li className="footer_info-item">
              <dl>
                <dt>ОБЩИЕ</dt>
                <dd><a href="tel:+351282405600">+(351) 282 405 600</a></dd>
                <dd><a href="tel:+351282405697">+(351) 282 405 697</a></dd>
                <dd>
                  <a href="mailto:info@autodromodoalgarve.com"
                    >info@autodromodoalgarve.com</a
                  >
                </dd>
              </dl>
            </li>
            <li className="footer_info-item">
              <dl>
                <dt>БИЛЕТЫ</dt>
                <dd><a href="tel:+351282405600">+(351) 282 405 600</a></dd>
                <dd>
                  <a href="mailto:tickets@autodromodoalgarve.com"
                    >tickets@autodromodoalgarve.com</a
                  >
                </dd>
              </dl>
            </li>
            <li className="footer_info-item">
              <ul className="social-list">
                <li className="social-list_item">
                  <a href="#" class="social-list_link">
                    <img className="social-list_icon" src={youtube} alt="" />
                  </a>
                </li>
                <li className="social-list_item">
                  <a href="#" class="social-list_link">
                    <img className="social-list_icon" src={instagram} alt="" />
                  </a>
                </li>
                <li className="social-list_item">
                  <a href="#" className="social-list_link">
                    <img className="social-list_icon" src={facebook} alt="" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="footer_address">
            <p className="footer_address-title">АДРЕС</p>
            <address className="footer_address-text">
              Sitio do Escampadinho, Mexilhoeira Grande, 8500-148 Portimao, Portugal
            </address>
            <div id="map"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <a className="footer_bottom-link" href="#">Design by Varvara Prokopchuk</a>
          <a className="footer_logo" href="#">
            <img className="footer_logo-img" src={logoFooter} alt="logo" />
          </a>
          <a className="footer_bottom-link" href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
    );

 }

export default Footer;