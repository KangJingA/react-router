import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Post = ({ match }) => {
  // useParams hook to access the dynamic pieces of URL
  // else, destructure the match key from props
  const { id } = useParams();
  console.log(useParams());
  console.log(useLocation());

  // no need to change route but use the some params from the url
  // fetch query params from the url
  // eg. localhost:3000/post/1234?name=hey

  const query = new URLSearchParams(useLocation().search);
  return (
    <>
      <h2>Id is : {id}</h2>
      <h2>{query.get("name")}</h2>
      <h2>{query.get("last")}</h2>    
    </>
  );
};

export default Post;
