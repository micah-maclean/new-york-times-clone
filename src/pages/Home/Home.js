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
  const FILTERED_LIST = apiResult.filter( (news) => news.section !== 'well' && news.section !== 'opinion');
  

  return (
    <div className={styles.home}>
      <div>
        <div>
         {
          FILTERED_LIST.map( (news, i) => {
              if(i%2 === 0 && i+1<FILTERED_LIST.length){
                return(
                  <div key={i} className={styles.newsBlock}>
                    <div>
                      <News title={FILTERED_LIST[i].title} abstract={FILTERED_LIST[i].abstract} noImage={true} obj={FILTERED_LIST[i]}/>
                      <News title={FILTERED_LIST[i+1].title} noImage={true} obj={FILTERED_LIST[i+1]}/>
                    </div>
                   
                    <img src={FILTERED_LIST[i].multimedia?.length > 0 ? news.multimedia[1].url : null} alt="" />
                  </div>
                )
              } 
          })
        } 
        </div>
        
      
        {FILTERED_OPINION.length > 0 && <Aside newsList={FILTERED_OPINION}/>}
      </div>
      <div>
        <h4>Well</h4>
        {FILTERED_WELL && <GridLine newsList={FILTERED_WELL}/>}
      </div>
      
      
    </div>
  );
}

export default Home;
