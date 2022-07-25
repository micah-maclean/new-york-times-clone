import News from "../News";
import styles from "./Aside.module.css"

function Aside({newsList}) {
  return (
    <aside className={styles.aside}>
        {/* <News  title={newsList[0].title} abstract={'Abstrato da noticia'} /> */}
          <News 
          image={newsList[0].multimedia?.length > 0 ? newsList[0].multimedia[1] : null} 
          title={newsList[0].title} abstract={newsList[0].abstract} obj={newsList[0]} />
        <hr />
        <div>
          <News image={newsList[1].multimedia?.length > 0 ? newsList[1].multimedia[1] : null}  title={newsList[1].title} noCopyright={true} obj={newsList[1]} />
          <News  image={newsList[2].multimedia?.length > 0 ? newsList[2].multimedia[1] : null} title={newsList[2].title} noCopyright={true} obj={newsList[2]} />
        </div>
        <hr />
        <div>
          <h4>In case you missed it</h4>
          {newsList.slice(3).map((news, i) => (
            <News key={i} direction='row-reverse' image={news.multimedia?.length > 0 ? news.multimedia[2] : null} title={news.title} noCopyright={true} obj={news} />
          ))}
        </div>
    </aside>
  )
}
export default Aside;