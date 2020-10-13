import React from "react";
import { withRouter } from "react-router-dom";

import "./card-styles.scss";

const Card = ({ routeName, items, history,match }) => (
  <div className="card">
    {items
      .filter((item) => item.id < 5)
      .map(({ id, name, imageUrl }) => (
        <div key={id}>
          <div className="card-content">
            <div className="img-box">
              <img src={imageUrl}></img>
            </div>
            <h3 onClick={() => history.push(`${match.url}/${routeName}/${id}`)}>{name}</h3>
          </div>
        </div>
      ))}
  </div>
);

export default withRouter(Card);
