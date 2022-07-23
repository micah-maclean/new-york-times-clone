import axios from 'axios';
import { useEffect, useState } from 'react';
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

  const FILTERED_WELL = apiResult.filter((news) => news.section === "well");
  const FILTERED_OPINION = apiResult.filter(
    (news) => news.section === "opinion"
  );
  const FILTERED_BUSINESS = apiResult.filter(
    (news) => news.section === "business"
  );
  const FILTERED_US = apiResult.filter((news) => news.section === "us");
  const FILTERED_ARTS = apiResult.filter((news) => news.section === "arts");

  return (
    <div>
      <div style={{ background: "lightblue" }}>
        {FILTERED_ARTS.map((news, i) => (
          <>
            <p style={{ color: "red" }}>
              {news.section} : {news.subsection}
            </p>

            <News
              key={i}
              title={news.title}
              abstract={news.abstract}
              url={news.url}
              image={news.multimedia?.length > 0 ? news.multimedia[0] : null}
              caption={news.caption}
              byline={news.byline}
              publishedDate={news.published_date}
            />
          </>
        ))}
      </div>
      <div style={{ background: "lightgray" }}>
        {FILTERED_WELL.map((news, i) => (
          <>
            <p style={{ color: "red" }}>
              {news.section} : {news.subsection}
            </p>
            <News
              key={i}
              title={news.title}
              abstract={news.abstract}
              url={news.url}
              image={news.multimedia?.length > 0 ? news.multimedia[0] : null}
              caption={news.caption}
              byline={news.byline}
              publishedDate={news.published_date}
            />
          </>
        ))}
      </div>
      <div style={{ background: "lightcyan" }}>
        {FILTERED_BUSINESS.map((news, i) => (
          <>
            <p style={{ color: "red" }}>{news.section}</p>
            <News
              key={i}
              title={news.title}
              abstract={news.abstract}
              url={news.url}
              image={news.multimedia?.length > 0 ? news.multimedia[0] : null}
              caption={news.caption}
              byline={news.byline}
              publishedDate={news.published_date}
            />
          </>
        ))}
      </div>
      <div style={{ background: "lightgray" }}>
        {FILTERED_US.map((news, i) => (
          <>
            <p style={{ color: "red" }}>
              {news.section} : {news.subsection}
            </p>
            <News
              key={i}
              title={news.title}
              abstract={news.abstract}
              url={news.url}
              image={news.multimedia?.length > 0 ? news.multimedia[0] : null}
              caption={news.caption}
              byline={news.byline}
              publishedDate={news.published_date}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Home;
