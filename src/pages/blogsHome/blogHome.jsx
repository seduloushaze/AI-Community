import React, { useEffect , useState} from "react";
import './blogHome.css';
import OneBlogBox from "./oneBlogBox/oneBlogBox";
import axios from "axios";


export default function BlogHome() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/blogs/')
    .then((response) => {
      console.log(response.data);
      setBlogs(response.data);
    }) 
    .catch((error) => {
      console.log(error);
      alert("Failed to fetch blogs");
    }); 
  } , []);

  const Display = blogs.map((blog) => {
    return (
      <OneBlogBox title = { blog.title } authors = { blog.authors } date = {blog.date} />
    )
  });

  return ( 
    <div className = "blogHome" >
      <div className = "blogsContainer" >
        { Display}
      </div>
    </div>
  );
}
