import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) =>{
  const [articles, setArticles]=useState([]);
  const [loading, setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const[totalArticles, setTotalArticles]=useState(0);
  
  const capitalize=(str)=>
  {
    return str.charAt(0).toUpperCase()+str.slice(1);
  }
     
  
  const updateNews = async() => {
      const url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData= await data.json();
      setArticles(parsedData.articles);
      setTotalArticles(parsedData.totalResults);
      setLoading(false);

  }
  useEffect(()=>{
    updateNews();
    document.title=`${capitalize(props.category)}-ABCNews`;
  },[])
  const fetchMoreData = async() => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData= await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalArticles(parsedData.totalResults);
      setLoading(false);
  };
    return (
      <>
        <div className="container my-3"><h1>ABCNews-TopHeadlines</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalArticles}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {articles.map((elements) => {
            return <div className="col-md-4 my-3" key={elements.url}>
                <NewsItem
                  title={elements.title}
                  description={elements.description}
                  imageUrl={elements.urlToImage}
                  newsID={elements.url}
                  author={elements.author}
                  date={elements.publishedAt}
                />
              </div>
              
          })}
        </div>
        </div>
        </InfiniteScroll>
        </div>
        </>
    );
  }

News.defaultProps={
  pageSize: 5,
  country: 'us',
  category: '',
}
News.propTypes={
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
}

export default News;
