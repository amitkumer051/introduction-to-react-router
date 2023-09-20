import { useLoaderData, useNavigate } from "react-router-dom";
import './PostDetails.css'
const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body} =post;

    const navigate =useNavigate()
    const handleGoBack =()=>{
        navigate(-1)
    }

    return (
        <div className="postDetails">
            <h2>{id}</h2>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;