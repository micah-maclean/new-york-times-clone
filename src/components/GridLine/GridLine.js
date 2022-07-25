import News from "../News"
import styles from "./GridLine.module.css";

function GridLine({newsList}) {
  return (
    <div className={styles.gridLine}>
        {
            newsList.slice(0,5).map((news, i) => (
                <News key={i} image={news.multimedia?.length > 0 ? news.multimedia[1] : null} title={news.title} obj={news} />
            ))
        }
    </div>
  )
}
export default GridLine