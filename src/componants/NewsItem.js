import React from "react";
import { HelmetProvider } from "react-helmet-async";


export default function NewsItem(props) {
    let {title,description,imageurl,newsurl,mode,textMode, author,alt, time} = props;
    return (
      <div>
        <HelmetProvider>
        <div className="card my-4 mx-4" style={{  boxShadow:"3px 6px gray"}}>
          <img src={imageurl} style={{height:"150px"}} className="card-img-top" alt= {alt} />
          <div className={`card-body bg-${mode} text-${textMode}`}>
            <h5  className={ `text-${textMode} bg-${mode} card-title`}>{title}</h5>
            <p style={{fontFamily:"revert-layer"}} className="card-text">
              {description}
            </p>
            <a style={{fontFamily:"-moz-initial"}} target="_blank" rel="noreferrer" href={newsurl} className="btn btn-sm btn-primary">
              Read more...
            </a>
            <p style={{fontFamily:"monospace"}} className="card-text"><small className="text-muted">{!author? "Unknown": author} | {time} </small></p>
          </div>
        </div>
        </HelmetProvider>
      </div>
    );
}
