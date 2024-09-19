import { reusableComponent } from "../utils";
const Reviews = async () => {

    // using async await we are stopping this component rendering for 4 seconds
    await new Promise((resolve) => {
        setTimeout(resolve, 4000);
    });
    console.log(reusableComponent);
    return (
      <div>This is Reviews Page</div>
    );
  }
export default Reviews;