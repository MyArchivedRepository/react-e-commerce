import React from "react";
import ShopData from "../../shopdata";
import Card from "../card/card";
import { Link } from "react-router-dom";

import "./category-styles.scss";

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      shopData: ShopData,
    };
  }

  render() {
    return (
      <div className="box">
        {this.state.shopData.map(({ id, title, routeName, ...others }) => (
          <div>
            <h1>{title}</h1>
            <Card key={id} routeName={routeName} {...others} />
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to={`/shop/${routeName}`}
            >
              <p>EXPLORE MORE</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Category;
