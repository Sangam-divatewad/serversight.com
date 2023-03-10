import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export default function NewsItem(props) {
  let {
    title,
    description,
    imageurl,
    newsurl,
    mode,
    textMode,
    author,
    alt,
    time,
  } = props;
  return (
    <div>
      <HelmetProvider>
        <div className=" my-4 mx-4" >
          
          <LazyLoadImage
            rel="preconnect"
            src={imageurl}
            height={150}
            className="card-img-top"
            style={{borderRadius:"8px"}}
            alt={alt}
          />
          <div className={`mt-2 card-body bg-${mode} text-${textMode}`}>
            <h5 style={{ fontFamily: "sans",fontWeight:"bold" }} className={`mb-3 text-${textMode} bg-${mode} card-title`}>
              {title}
            </h5>
            <p style={{ fontFamily: "serif",fontStyle:"italic",fontSize:"1.2rem" }} className="card-text">
              {description}...
            </p>
            <Link
              style={{ fontFamily: "-moz-initial" }}
              target="_blank"
              rel="preconnect"
              href={newsurl}
              className="btn btn-sm btn-primary"
            >
              Read more...
            </Link>
            <p style={{ fontFamily: "monospace" }} className="card-text">
              <small className="text-muted">
                {!author ? "Unknown" : author} | {time}{" "}
              </small>
            </p>
          </div>
        </div>
      </HelmetProvider>
    </div>
  );
}
