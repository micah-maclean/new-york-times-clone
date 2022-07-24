import './Newhorizontal.css';

import { Link, useNavigate } from 'react-router-dom';

function NewhorizontalComponent({ news }) {
  const navigate = useNavigate();
  function saveToLocalStorage(news) {
    localStorage.setItem('news-detail', JSON.stringify(news));
    navigate('/news-detail');
  }

  return (
    <div className="horizontal">
      <div className="news-horizontal">
        {news?.length &&
          news.map((news, i) => {
            return (
              <div
                onClick={() => saveToLocalStorage(news)}
                className="news-horizontal-card"
                key={i}
              >
                <img
                  width="208"
                  height="137"
                  src={news.multimedia ? news.multimedia[0].url : ''}
                  alt=""
                />
                <Link
                  onClick={() => saveToLocalStorage(news)}
                  to="/news-detail"
                >
                  {news.title}
                </Link>
              </div>
            );
          })}
      </div>
      <hr />
    </div>
  );
}

export default NewhorizontalComponent;
