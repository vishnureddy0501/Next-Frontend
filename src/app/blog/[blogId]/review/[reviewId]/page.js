
import { notFound } from "next/navigation";
const BlogDetails = ({ params }) => {
    if(parseInt(params.reviewId) > 100) {
        notFound(); // invoking the not found page programatically
    }
    return (
        <div>
            <div>Review id is {params.reviewId}</div>
            <div>blog id is {params.blogId}</div>
        </div>
    );
  }
export default BlogDetails;