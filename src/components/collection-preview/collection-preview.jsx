import React from "react";
import CollectionItem from "../collection-item/collection-item"
import {withRouter} from "react-router-dom";


import "./collection-preview-styles.scss";

const CollectionPreview = ({title,items,history,match}) => {console.log(title,items,history,match); return(
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
        {
            items.filter((item) => item.id <5 )
            .map(({id,...others}) => <CollectionItem key={id} {...others} />)  
        }

        </div>
    </div>
)}

export default withRouter (CollectionPreview);