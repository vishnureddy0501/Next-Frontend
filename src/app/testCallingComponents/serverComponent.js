import axios from 'axios';
const ServerComponent = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 4000);
  });
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(response.data);
  
    return (
      <div>This is Server Component</div>
    );
  }
export default ServerComponent;