import { useLocation } from "react-router-dom"
import gift from './gift-icon.svg';
import share from './share-icon.svg';
import favorite from './favorite.svg';

function Article() {
    const news = useLocation().state;
    
    return (
      <div className="news-detail">
      <div className="news-detail-card">
        <div className="news-detail-card-title">
          <h1>{news?.title}</h1>
        </div>
        <div className="news-detail-card-abstract">
          <p>{news?.abstract}</p>
        </div>

        <hr />

        <div className="news-detail-card-buttons">
          <button type="button">
            <span>
              <img src={gift} />
              Give this article
            </span>
          </button>
          <button type="button">
            <span>
              <img src={share} />
            </span>
          </button>
          <button type="button">
            <span>
              <img src={favorite} />
            </span>
          </button>
        </div>
      </div>
      <div className="news-detail-card-image">
        <img src={news?.multimedia[0].url} />
      </div>
    </div>
    )
  }
  
  export default Article