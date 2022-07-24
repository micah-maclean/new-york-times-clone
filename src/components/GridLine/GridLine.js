import News from "../News"
import styles from "./GridLine.module.css";

function GridLine({newsList}) {
  return (
    <div className={styles.gridLine}>
        {
            newsList.slice(0,5).map(news => (
                <News image={news.multimedia?.length > 0 ? news.multimedia[1] : null} title={news.title}  />
            ))
        }
    </div>
  )
}
export default GridLine