import React from "react";

import MenuItem from "../menu/menu-item";
import Content from "../../content";

import "./directory-styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: Content,
    };
    
  }

  render() {
    return (
      <div className="directory">
        {this.state.section.map(({ id, ...others}) => (
          <MenuItem
            key={id}
            {...others} // pass ค่าอื่น ที่ยังไม่จำเป็นต้องระบุได้เลย เพราะ child components ไม่ได้ require ชื่อของ attribute แต่หมายถึงว่าเราต้องไป destruct ค่า props ใน child ด้วย
            subtitle="EXPLORE"
          />
        ))}
      </div>
    );
  }
}

export default Directory;
