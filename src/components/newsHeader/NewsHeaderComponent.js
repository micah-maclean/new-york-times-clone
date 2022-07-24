import './newheader.css';

import { useNavigate } from 'react-router-dom';
import moment from 'moment';

function NewsHeaderComponent({ newsCenter, newsAside }) {
  const newsCenterData = newsCenter?.length ? newsCenter[0] : [];
  const navigate = useNavigate();

  function saveToLocalStorage(news) {
    localStorage.setItem('news-detail', JSON.stringify(news));
    navigate('/news-detail');
  }

  return (
    <div className="news-header">
      <div
        onClick={() => saveToLocalStorage(newsCenterData)}
        className="center"
      >
        <div>
          {newsCenterData.multimedia?.length && (
            <img
              width="694"
              height="463"
              src={newsCenterData.multimedia[0].url}
            />
          )}
        </div>

        <h1 className="title">{newsCenterData?.title}</h1>
        <p className="subtitle">{newsCenterData?.abstract}</p>
        <p className="data-center">{` ${moment(
          newsCenterData?.published_date
        ).format('ll')}`}</p>
      </div>
      <div className="aside">
        {newsAside?.length &&
          newsAside.map((news, i) => {
            return (
              <div
                onClick={() => saveToLocalStorage(news)}
                key={i}
                className="aside_card"
              >
                <div className="aside_img">
                  {news.multimedia?.length && (
                    <img width="85" height="75" src={news.multimedia[0].url} />
                  )}
                  <h2>{news.title}</h2>
                </div>
                <p>{news.abstract}</p>
                <div className="new-by-date">{`${moment(
                  news.published_date
                ).format('ll')}  ${news.byline}`}</div>

                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default NewsHeaderComponent;
