import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item-styles.scss";

const MenuItem = ({ size, history, match, title, imgURL, subtitle }) => {
  return (
    //เมื่อทำการ click ที่ div จะมีการ trigger function history.push เพื่อ push ค่าที่ต้องการ ให้เป็น location ซึ่งจะเห็นกว่า ตอนอยู่หน้า home นั้น location ของเราจะเป็น / แต่พอมีการ trigger onclick  location จะเปลี่ยนเป็น /hats ซึ่งเท่ากับ match.url+title วิธีนี้ ทำให้เป็น dynamicฒากกว่าการใช้ ink เพราะเราใช้ค่าที่ติดมากับ props
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}shop/${title}`)}
    >
      <div
        className="background-img"
        style={{
          backgroundImage: "url(" + imgURL + ")",
          backgroundSize: "cover",
        }}
      />

      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
