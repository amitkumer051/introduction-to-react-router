/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {id,body}=post;
    const navigate = useNavigate();

    const handleClick =()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='postStyle'>
            <h2>{id}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleClick}>Button Details</button>
        </div>
    );
};


export default Post;