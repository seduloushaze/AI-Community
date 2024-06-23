import React, { useEffect } from "react";
import './blogHome.css';
import Layout from "../Layout/Layout";
import OneBlogBox from "../oneBlogBox/oneBlogBox";
import axios from "axios";


export default function BlogHome() {

  // useEffect(() => {
  //   axios.get('http://localhost:8000/blogs')
  //   .then((response) => {
  //     console.log(response.data);
  //   })  
  // } , []);

  return ( 
    <div className = "blogHome" >
       
        <div className = "blogsContainer" >
          <OneBlogBox title = "Blog 1"
                      authors = "Author 1" />
          <OneBlogBox title = "Blog 2"
                      authors = "Author 2" />
          <OneBlogBox title = "Blog 3"
                      authors = "Author 3" />
          <OneBlogBox title = "Blog 4"
                      authors = "Author 4" />
          <OneBlogBox title = "Blog 5"
                      authors = "Author 5" />
          <OneBlogBox title = "Blog 6"
                      authors = "Author 6" />
          <OneBlogBox title = "Blog 7"
                      authors = "Author 7" />
          <OneBlogBox title = "Blog 8"
                      authors = "Author 8" />
          <OneBlogBox title = "Blog 9"
                      authors = "Author 9" />
          <OneBlogBox title = "Blog 10"
                      authors = "Author 10" />
        </div>
      
    </div>

  );
}

const data = [  
  {
    title: "Blog 1",  
    authors: "Author 1"
  }
  , {
    title: "Blog 2",  
    authors: "Author 2"
  } 
  , {
    title: "Blog 3",  
    authors: "Author 3"
  },
  {
    title: "Blog 4",  
    authors: "Author 4"
  },
  {
    title: "Blog 5",  
    authors: "Author 5"
  },
  {
    title: "Blog 6",  
    authors: "Author 6"
  },
  {
    title: "Blog 7",  
    authors: "Author 7"
  },
  {
    title: "Blog 8",  
    authors: "Author 8"
  },
  {
    title: "Blog 9",  
    authors: "Author 9"
  },
  {
    title: "Blog 10",  
    authors: "Author 10"
  }
];