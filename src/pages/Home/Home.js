import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from "./Home.module.css"
import Aside from '../../components/Aside/Aside';
import GridLine from '../../components/GridLine/GridLine';
import News from '../../components/News';

function Home() {
  const [apiResult, setApiResult] = useState([]);

  async function setup() {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=G3Zxr0y95aXHyAInrBCbNtumQd5BKg1h"
      );
      setApiResult(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setup();
  }, []);

  
  const FILTERED_OPINION = apiResult.filter( (news) => news.section === 'opinion');
  const FILTERED_WELL = apiResult.filter( (news) => news.section === 'well');

  return (
    <div className={styles.home}>
      <div>
        <div>
          {console.log(FILTERED_OPINION)}
         {
          apiResult.map( (news, i) => {
              if(i%2 === 0 && i+1<apiResult.length){
                return(
                  <div className={styles.newsBlock}>
                    <div>
                      <News key={i} title={apiResult[i].title} abstract={apiResult[i].abstract}/>
                      <News key={i+1} title={apiResult[i+1].title} />
                    </div>
                   
                    <img src={apiResult[i].multimedia?.length > 0 ? news.multimedia[1].url : null} alt="" />
                  </div>
                )
              } 
          })
        } 
        </div>
        
      
        {FILTERED_OPINION.length > 0 && <Aside newsList={FILTERED_OPINION}/>}
      </div>
      {FILTERED_WELL && <GridLine newsList={FILTERED_WELL}/>}
      
    </div>
  );
}

export default Home;
