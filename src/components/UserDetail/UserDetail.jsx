import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetail = () => {
    const user =useLoaderData();
    const {name,website}=user;
    const navigate=useNavigate();
    const handleBack =()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>User Detail</h2>
            <h2>Name: {name}</h2>
            <p>Web site: {website}</p>
            <button onClick={handleBack}>Back to Users</button>
        </div>
    );
};

export default UserDetail;