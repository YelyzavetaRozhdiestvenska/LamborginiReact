import "./info.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"


function Container({ children }) {
    return (<div className="info_part" style={children.imageStyle}>  
             <div> <h3 className= "info_title">{children.title}</h3>
            <div className="info_part-textbox">
                <p className="info_text">{children.text1}</p>
                <b className="info_text">{children.text2}</b>
                <img className="info_part-img" src={children.image}></img>
                </div></div>
        </div>);
}


export default Container;


// как правильно прописать таблицу?