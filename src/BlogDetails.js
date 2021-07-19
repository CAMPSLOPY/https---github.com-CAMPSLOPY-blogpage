import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const  BlogDetails = () => {

    const { id } = useParams()
    const {data , error, isPending} = useFetch('http://localhost:3001/blogs/' + id)
    return (  
        <div className="blog-details">
           {isPending && <div>Loading...</div>}
        </div>
    );
}
 
export default BlogDetails;