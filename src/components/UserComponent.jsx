import { useEffect,useState } from "react";
import UserView from "../views/UserView";

const UserComponent = ()=> {
    const [users,setUsers] = useState([])
    useEffect(()=> {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(object => setUsers(object.data));
    },[])
    // console.log
    return (
       users.length && users.map((item)=> {
            return (<UserView item = {item}  />)
        })
    );
}

export default UserComponent;
