
import { reusableComponent } from "../utils";
const Comments = async () => {
    // using async await we are stopping this component rendering for 4 seconds
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });

    // server side reuableComponent is called from client. we are using server-only package. Hence build fails.
    // this way we can keep the info confidential.
    console.log(reusableComponent);
    return (
      <div>This is Comments page</div>
    );
  }
export default Comments;