import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsID, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageUrl
              ? "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=161"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"}, {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsID}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
