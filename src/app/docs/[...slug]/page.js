
const Docs = () => {
    return (
      <div>if any route contains localhost:3000/docs/some_extra_params will match with this route</div>
    );
  }
export default Docs;
/*
[...slug]: 
--------------
  in place of slug you can use any name you want.

  ... is called catch all segments. it will catch all the segments with prefix.

  localhost:3000/docs won't be matched. because it is not having any thing after docs.

    localhost:3000/docs/something/... for these type of urls it works.

[[...slug]]:
-------------
  if you want to match  localhost:3000/docs also then change folder name to [[...slug]]
*/