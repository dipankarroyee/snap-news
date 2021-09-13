import React from "react";
import defaultArticleImg from "./images/default_article.png";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card border border-warning border-2 hover-shadow">
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}></div>
          <small className="badge rounded-pill bg-warning text-dark position-absolute m-2">{source}</small>
          <img
            src={!imageUrl ? defaultArticleImg : imageUrl}
            className="img-fluid"
            alt="..."
            style={{ height: "230px", width: "100%" }}
          />
          <a href={newsUrl} target="_blank" rel="noreferrer">
            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text mt-2">
            <small className="text-muted">
              By{" "}
              <p className="font-weight-bold text-danger" style={{ display: "inline" }}>
                {!author ? "Unknown Author" : author}
              </p>{" "}
              | {new Date(date).toLocaleString(undefined, { timeZone: "Asia/Kolkata" })}
            </small>
          </p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark btn-rounded">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
