import moment from "moment";
import { Link } from "react-router-dom";
import styles from "./News.module.css";

function News({ title, abstract, url, image, caption, byline, publishedDate }) {
  return (
    <article className={styles.news}>
      <figure>
        <Link to="article">
          {image && <img src={image?.url} alt={caption} />}
        </Link>
        <figcaption>
          <span>{image?.copyright}</span>
        </figcaption>
      </figure>
      <div>
        <h2>
          <Link to="article">{title}</Link>
        </h2>
        <p>{abstract}</p>
        <p>
          <span>{moment(publishedDate).fromNow()}</span>
          <span>{byline}</span>
        </p>
      </div>
    </article>
  );
}

export default News;
