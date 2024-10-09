import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/components/RightSideNews/Css/RightSide.css";
import { news } from "/src/data-source/news.js";
import { useState } from "react";

const RightSideNews = () => {
  const [expanded, setExpanded] = useState(false);

  const mainNews = news.slice(0, 5);
  const allNews = news;

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">LinkedIn Notizie</h3>
        <div className="ms-auto mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-info-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
        </div>
      </div>

      <div className="news-list">
        {(expanded ? allNews : mainNews).map((article) => (
          <div className="mb-3">
            <h6 className="mb-1">{article.title}</h6>
            <small className="text-muted">
              {article.timeAgo} • {article.readers}
            </small>
          </div>
        ))}

        <button onClick={toggleExpansion} className="btn btn-link p-0">
          {expanded ? "Meno dettagli" : "Vedi altro"}
        </button>
      </div>
    </div>
  );
};

export default RightSideNews;
