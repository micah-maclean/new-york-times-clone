import moment from 'moment';
import { Link } from 'react-router-dom';
import styles from "./News.module.css"
import defaultImage from "./Images/default-image.jpg";

function News({title, abstract, image, caption, byline, publishedDate, direction, noImage }) {
  return (
    <article className={styles.news} style={direction ? {display:'flex', flexDirection:`${direction}`} : {display:'block'}}>
        {image && <figure>
            <Link to="article">
                {image ? <img src={image.url} alt={caption}/> : <img src={defaultImage}/>}
            </Link>
            { image && image.copyright && 
                <figcaption>
                    <span>{image.copyright}</span>
                </figcaption>
            }
        </figure> }
        <div>
            <h3>
                <Link to="article">
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
