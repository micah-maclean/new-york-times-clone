import "./newsLatest.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import searchIcon from "./search-icon.svg";

function NewLatestComponent({ news }) {
  const navigate = useNavigate();

  function saveToLocalStorage(news) {
    localStorage.setItem("news-detail", JSON.stringify(news));
    navigate("/news-detail");
  }

  return (
    <div className="news-latest">
      <div className="news-latest-buttons">
        <button>Latest</button>
        <button className="btn-search">
          <div className="btn-search-card">
            <img className="search-icon" src={searchIcon} alt="" />
            <div>Search</div>
          </div>
        </button>
      </div>

      {news?.length &&
        news
          .filter((item) => moment(item.published_date).year() >= 2021)
          .sort(
            (a, b) => new Date(b.published_date) - new Date(a.published_date)
          )
          .map((item, i) => {
            return (
              <div
                onClick={() => saveToLocalStorage(item)}
                key={i}
                className="news-latest-card"
              >
                <div className="news-latest-content">
                  <div className="news-latest-content-date">
                    {moment(item.published_date).format("ll")}
                  </div>
                  <div className="news-latest-content-text">
                    <div className="news-latest-content-title">
                      <h2>{item.title}</h2>
                    </div>
                    <div className="news-latest-content-abstract">
                      {item.abstract}
                      {<p>{item.byline}</p>}
                    </div>
                  </div>
                  <div className="news-latest-content-image">
                    <img
                      width="205"
                      height="137"
                      src={item.multimedia ? item.multimedia[0].url : ""}
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
