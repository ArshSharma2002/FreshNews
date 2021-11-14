import React from "react";

const NewsItem=(props)=> {

 
    // we can also pass on props using given below method and if we are using ths then only pass props like {title} not {this.props.title}.
    // let { title, desc, imageUrl, newsUrl, date, author } = this.props;
    return (
      <div className='container my-5'>
        <div className="card" style={{width: "18rem"}}>
        <img src={props.imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text" ><small className="text-muted" >By {props.author} on {new Date(props.date).toGMTString()} </small></p>
            <p className="card-text">
              {props.desc}
            </p>
            <a href="noreferrer" target="_blank" className="btn btn-primary">
            {/* props.newsUrl */}
              Read Article
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
