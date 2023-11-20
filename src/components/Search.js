import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const Search =(props)=> {
  const {query}=useParams();
  const [articles, setArticles]=useState([]);
  const [loading, setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const[totalArticles, setTotalArticles]=useState(0);
  
  const capitalize=(str)=>
  {
    return str.charAt(0).toUpperCase()+str.slice(1);
  }
  
  const updateNews = async() => {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData= await data.json();
    setArticles(parsedData.articles);
    setTotalArticles(parsedData.totalResults);
    setLoading(false);

}
useEffect(()=>{
  updateNews();
  // document.title=`${capitalize(searchQuery)}-FastNews`;
},[])
const fetchMoreData = async() => {
  setPage(page+1);
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData= await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalResults);
    setLoading(false);
};
    return (
      <>
      <div className="container my-3"><h1>FastNews-TopHeadlines</h1>
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

Search.defaultProps = {
  pageSize: 5,
}

Search.propTypes = {
  pageSize: PropTypes.number,
  query: PropTypes.string, 
}

export default Search;
