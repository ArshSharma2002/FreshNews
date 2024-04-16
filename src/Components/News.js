import React, { useEffect , useState } from "react";
import Loader from "./Loader";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults:0

  //   };
  // }
  
  const updateNewsPage = async ()=>{
    props.setProgress(20);
    // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=${props.lang}&max=50&country=in&apikey=${props.apiKey}`;
    setLoading( true)
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    // this.setState({
      //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // });
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalArticles)
    setLoading(false)
    

    props.setProgress(100);
  }
  
  useEffect(() => {
      document.title = `FreshNews | ${props.category}`
    updateNewsPage();
    // eslint-disable-next-line
  }, [props.lang])
    
  // const componentDidMount= async ()=> {
  //   this.updateNewsPage();
  // }


  const fetchMoreData = async () => {
    // this.setState({page:state.page+1});
    // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;

    // NOTE: API only returning 10 articles per request. need to upgrade plan
    const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=${props.lang}&country=in&max=50&apikey=${props.apiKey}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    // this.setState({
    //   articles: state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // });
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalArticles)
    setLoading(false)
    
  };

 
    return (
      <>
        <h2 className="text-center" style={{marginTop:"90px"}} >Today's Top Headlines</h2>
        {loading?<Loader/>:""}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Loader/>}
        >
          <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4 " key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  desc={element.description ? element.description : ""}
                  imageUrl={
                    element.image
                      ? element.image
                      : "https://i.gadgets360cdn.com/large/microsoft_clippy_twitter_1626334118424.jpg"
                  }
                  newsUrl={element.url}
                  author={element.source.name?element.source.name:"Unknown"}
                  date={element.publishedAt}
                  />
              </div>
            );
          })}
        </div>
        </div>
          </InfiniteScroll>
        
      </>
    );
  
}

export default News;
