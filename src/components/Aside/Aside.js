import News from "../News";
import styles from "./Aside.module.css"

function Aside({newsList}) {
  return (
    <aside className={styles.aside}>
        {/* <News  title={newsList[0].title} abstract={'Abstrato da noticia'} /> */}
          <News 
          image={newsList[0].multimedia?.length > 0 ? newsList[0].multimedia[1] : null} 
          title={newsList[0].title} abstract={newsList[0].abstract} />
        <hr />
        <div>
          <News image={newsList[1].multimedia?.length > 0 ? newsList[1].multimedia[1] : null}  title={newsList[1].title} />
          <News  image={newsList[2].multimedia?.length > 0 ? newsList[2].multimedia[1] : null} title={newsList[2].title} />
        </div>
        <hr />
        <div>
          <h4>In case you missed it</h4>
          {newsList.slice(3).map((news, i) => (
            <News key={i} direction='row-reverse' image={news.multimedia?.length > 0 ? news.multimedia[2] : null} title={news.title} />
          ))}
        </div>
    </aside>
  )
}
export default Aside;