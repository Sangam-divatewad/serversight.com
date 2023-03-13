import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import preconnect from "preconnect";
import AdsComponent from "./Ads";
export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotlaResults] = useState(0);
  const [loading, setLoading] = useState(false);

  document.description = `Top news from ${props.cat} section`;

  const options = {
    method: "GET",
    headers: {
      Authorization: "Basic c2FuZGk6U2FuZGlAMTQz",
      "X-RapidAPI-Key": "30b7b05d96mshe9a931a5b725a50p1e87bfjsnb764b995436e",
      "X-RapidAPI-Host": "news1111.p.rapidapi.com",
    },
  };

  const update = async () => {
    setLoading(true);
    props.setProgress(10);
    let data = await fetch(
      `https://news1111.p.rapidapi.com/${props.cat}?${props.cat}=%2F${props.cat} `,
      options
    );
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(parsedData.articles);
    setPage(page + 1);
    setTotlaResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    props.setProgress(10);

    props.setProgress(50);
    update();
    props.setProgress(100);
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    setLoading(true);
    let data = new preconnect(
      `https://news1111.p.rapidapi.com/${props.cat}?${props.cat}=%2F${props.cat}`,
      options
    );
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotlaResults(parsedData.totalResults);
    setPage(page + 1);
    setLoading(false);
  };

  return (
    <>
      <div
        className={`container  my-4 bg-${props.mode} text-${props.textMode}`}
      >
        <h2
          style={{ fontFamily: "monospace" }}
          className="mx-4 border-bottom  text-center"
        >
          Top {props.cat} Headlines
        </h2>
        <AdsComponent dataAdslot="8782573613"/>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Helmet>
                      <title>
                        serversight.com - Top {props.cat} Headlines | Today's
                        Top {props.cat} Headlines, Today's Top News Stories,
                        Latest News Today
                      </title>
                      <meta
                        name="description"
                        content="Top News Stories of the day, Latest News Headlines, News Specials, Breaking News and Latest India News, World current affairs &amp; Political News all around the clock at serversight.com."
                      ></meta>
                    </Helmet>
                    <NewsItem
                      title={element.title}
                      description={
                        element.description === null
                          ? "..."
                          : element.description &&
                            element.description.slice(0, 200)
                      }
                      imageurl={
                        element.image
                          ? element.image
                          : "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      }
                      alt={element.title}
                      newsurl={element.url}
                      mode={props.mode}
                      textMode={props.textMode}
                      author={element.author}
                      time={element.publishedAt}
                    />
                    <AdsComponent dataAdslot="8782573613"/>
                  </div>
                );
              })}
            </div>
            <ScrollToTop color="blue" smooth={true} />
          
          </div>
        </InfiniteScroll>
      </div>
      <Footer />
    </>
  );
}
