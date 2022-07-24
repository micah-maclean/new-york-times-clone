import './newheader.css';

import moment from 'moment';

function NewsHeaderComponent({ newsCenter, newsAside }) {
  const newsCenterData = newsCenter?.length ? newsCenter[0] : [];

  return (
    <div className="news-header">
      <div className="center">
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
      </div>
      <div className="aside">
        {newsAside?.length &&
          newsAside.map((news, i) => {
            return (
              <div className='aside_card'>
                <div className='aside_img' key={i}>
                  {news.multimedia?.length && (
                    <img width="85" height="75" src={news.multimedia[0].url} />
                  )}
                   <h2>{news.title}</h2>
                </div>
                <p>{news.abstract}</p>
                <div className='new-by-date'>{`${moment(news.published_date).format("ll")}  ${news.byline}`}</div>

                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default NewsHeaderComponent;
