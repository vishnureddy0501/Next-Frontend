
import { Suspense } from "react";
import Comments from "./comments/page";
import Reviews from "./reviews/page";
const Blog = () => {
    return (
        <div>
            <Suspense fallback={ <p>comments Loading...</p>}>
                <Comments />
            </Suspense>
            <Suspense fallback={<p>Reviews Loading...</p>}>
                <Reviews />
            </Suspense>
        </div>

    );
  }
export default Blog;
/* 
without suspence
-----------------
this page won't loads until comments, reviews both are rendered.
if reviews takes more time, then it is blocking comments also from loading.

How to overcome it? using suspence:
-----------------------------------
reviews kept in suspence. it means it won't affect other's loading performance.
it means we are having separate loader for reviews. it loads when ever it's data is available
*/