import "./info.css"
import "./../../styles/reset.css"
import "./../../styles/common.css"

function Article({ children }) {

    return <ArticleContainer imageStyle={children.imageStyle}>
            <ArticleTitle title={children.title} />
            <ArticleText text={children.text1} textStyle={children.text1Style}/>
            <ArticleText text={children.text2} textStyle={children.text2Style} />
            <ArticleImage image={children.image} />
        </ArticleContainer>
}

function ArticleContainer({ children, imageStyle }) {
    return <div className={`info_part ${imageStyle}`}> 
        <div className="info_part-textbox">{children}</div>
    </div>    
}

function ArticleTitle({ title }) {
    return <h3 className="info_title">{title}</h3> 
}

function ArticleText({ text, textStyle }) {
    return <p className={textStyle}>{text}</p>
}

function ArticleImage({image}) {
    return <img className="info_part-img" src={image}></img>
}

export default Article;
