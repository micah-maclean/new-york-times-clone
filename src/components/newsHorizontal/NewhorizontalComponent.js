import "./Newhorizontal.css";

function NewhorizontalComponent({ news }) {
  return (
    <div className="horizontal">
      <div className="news-horizontal">
        {news?.length &&
          news.map((news, i) => {
            return (
              <div className="news-horizontal-card" key={i}>
                <img
                  width="208"
                  height="137"
                  src={news.multimedia ? news.multimedia[0].url : ""}
                  alt=""
                />
                <a href="">{news.title}</a>
              </div>
            );
          })}
      </div>
      <hr />
    </div>
  );
}

export default NewhorizontalComponent;
