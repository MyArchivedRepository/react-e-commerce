import React from "react";
import CollectionPreview from "../../collection-preview/collection-preview"


import "./shoppage-styles.scss";
import shopData from "../../../shopdata"

class ShopPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      collections : shopData
    }

  }
  

  render(){
    const {collections} = this.state
    return(
      <div className="shoppage">
        {
          collections.map(({id, ...others}) => 

          <CollectionPreview key={id} {...others} />
          )
        }
      </div>
    )
  }
}





export default ShopPage;
