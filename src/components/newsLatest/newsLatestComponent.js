import './newsLatest.css';

import moment from 'moment';

function NewLatestComponent({ news }) {
  return (
    <div className="news-latest">
      {news?.length &&
        news.map((item) => {
          return (
            <div className="news-latest-card">
              <div className="news-latest-content">
                <div className="news-latest-content-date">
                  {moment(item.published_date).format('ll')}
                </div>
                <div className="news-latest-content-text">
                  <div className="news-latest-content-title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="news-latest-content-abstract">
                    {item.abstract}
                  </div>
                </div>
                <div className="news-latest-content-image">
                  <img
                    width="205"
                    height="137"
                    src={item.multimedia ? item.multimedia[0].url : ''}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default NewLatestComponent;
