import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3000/blogs')
      .then(res => {
        if(!res.ok){
          throw Error('could not fetch the data for that resource')
        }
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setBlogs(data);
      })
      .catch(err => {
        console.log(err.message);
      })
    }, 1000);
  }, [])

  return (
    <div className="home">
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;