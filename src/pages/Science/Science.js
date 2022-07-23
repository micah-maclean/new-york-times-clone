import { useEffect, useState } from "react";
import axios from "axios";
import News from "../../components/News";

function Science() {
  const [apiResult, setApiResult] = useState([]);

  async function setup() {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=G3Zxr0y95aXHyAInrBCbNtumQd5BKg1h"
      );
      console.log(data.results);
      setApiResult(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setup();
  }, []);

  return (
    <div>
      <div style={{ background: "lightblue" }}>
        {apiResult.map((news, i) => (
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
export default Science;
