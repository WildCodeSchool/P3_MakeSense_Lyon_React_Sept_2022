import React from "react";

function TimelineItemDecision({ data }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <time>{data.date}</time>
        <p>{data.title}</p>
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.title}
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  );
}

export default TimelineItemDecision;
