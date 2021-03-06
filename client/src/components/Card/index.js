import React from "react";

function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header" style={{backgroundColor: "pink"}}>
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
