import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import NewsHeaderComponent from '../../components/newsHeader/NewsHeaderComponent';
import NewhorizontalComponent from '../../components/newsHorizontal/NewhorizontalComponent';
import NewLatestComponent from '../../components/newsLatest/newsLatestComponent';

function RenderPage({ url }) {
  const [news, setNews] = useState({});

  async function setup() {
    try {
      const { data } = await axios.get(url);

      const newsDate = data.results.filter(
        (item) => item.title !== '' && item.multimedia.length > 0
      );
      setNews({
        center: newsDate
          .filter((item) => moment(item.published_date).year() >= 2021)
          .slice(0, 1),
        aside: newsDate.slice(2, 5),
        mostRead: newsDate.slice(6, 11),
        newsGroupedByLineSize: groupByLineLength(newsDate, 5).filter(
          (item) => item.length === 5
        ),
        latestNews: newsDate,
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
      <NewsHeaderComponent newsCenter={news.center} newsAside={news.aside} />
      <NewhorizontalComponent news={news.mostRead} />
      {news.newsGroupedByLineSize?.length &&
        news.newsGroupedByLineSize.map((item, i) => {
          return <NewhorizontalComponent key={i} news={item} />;
        })}

      <NewLatestComponent news={news.latestNews} />
    </div>
  );
}

export default RenderPage;
