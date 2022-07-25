import moment from 'moment';
import { Link } from 'react-router-dom';
import styles from "./News.module.css"
import defaultImage from "./Images/default-image.jpg";

function News({obj, title, abstract, image, caption, byline, publishedDate, direction, noImage, noCopyright }) {
  return (
    <article className={styles.news} style={direction ? {display:'flex', flexDirection:`${direction}`, gap:'8px'} : {display:'block'}}>
        <figure style={noImage ? {display:'none'} : {display:'block'}}>
            <Link to="article" state={obj}>
                {image ? <img src={image.url} alt={caption}/> : <img src={defaultImage}/>}
            </Link>
            { image && image.copyright && 
                <figcaption style={noCopyright ? {display:'none'} : {display:'block'}}>
                    <span>{image.copyright}</span>
                </figcaption>
            }
        </figure> 
        <div>
            <h3>
                <Link to="article" state={obj}>
                    {title}
                </Link>
            </h3>
            <p>{abstract}</p>
            <p>
                { publishedDate && <span>{moment(publishedDate).fromNow()}</span>}
                { byline && <span>{byline}</span>}
            </p> 
        </div>       
    </article>
  );
}

export default News;
