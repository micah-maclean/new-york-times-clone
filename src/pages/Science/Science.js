import { useEffect, useState } from 'react';
import axios from 'axios';
import LayoutComponent from '../../components/layout/LayoutComponent';
import NewsHeaderComponent from '../../components/newsHeader/NewsHeaderComponent';
import NewhorizontalComponent from '../../components/newsHorizontal/NewhorizontalComponent';
import NewLatestComponent from '../../components/newsLatest/newsLatestComponent';

function Science() {
  const [news, setNews] = useState({});

  async function setup() {
    try {
      const { data } = await axios.get(
        'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=G3Zxr0y95aXHyAInrBCbNtumQd5BKg1h'
      );
      console.log(data.results);
      setNews({
        center: data.results.slice(0, 1),
        aside: data.results.slice(2, 5),
        mostRead: data.results.slice(6, 11),
        newsGroupedByLineSize: groupByLineLength(data.results, 5).filter(
          (item) => item.length === 5
        ),
        latestNews: data.results
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setup();
  }, []);

  function groupByLineLength(results, lineLength) {
    let resultsGrouped = [];
    const groupingEnd = results.length / lineLength;

    for (let i = 0; i < groupingEnd; ++i) {
      const line = results.slice(i * lineLength, (i + 1) * lineLength);
      resultsGrouped.push(line);
    }

    return resultsGrouped;
  }

  return (
    <div>
      <LayoutComponent>
        <NewsHeaderComponent newsCenter={news.center} newsAside={news.aside} />
        <NewhorizontalComponent news={news.mostRead} />
        {news.newsGroupedByLineSize?.length &&
          news.newsGroupedByLineSize.map((item) => {
            return <NewhorizontalComponent news={item} />;
          })}

          <NewLatestComponent news={news.latestNews} />
      </LayoutComponent>
    </div>
  );
}
export default Science;
