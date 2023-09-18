import "./info.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"
import info1 from "./../../images/info1.jpg"
import info2 from "./../../images/info2.png"






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

function Container({ siteData}) {
    return (<div className="info_part">  
            {siteData.map((i) => <div> <h3 className="info_title">{i.title}</h3>
            <div className="info_part-textbox">
                <p className="info_text">{i.text1}</p>
                <b className="info_text">{i.text2}</b>
                {/* <img className="info_part-img">{i.image}</img> */}
                </div></div>)}
        </div>);
}

 
export default Container;


// как правильно прописать таблицу?