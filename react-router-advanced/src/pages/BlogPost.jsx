import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // Access the dynamic `id` parameter

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the content for blog post with ID: {id}.</p>
    </div>
  );
}

export default BlogPost;