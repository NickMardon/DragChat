import React, {useState, useEffect} from 'react'
import UserInfo from "../components/UserInfo/userInfo"
import UserHalls from "../components/UserHalls/userHalls"
import API from '../utils/api'

// import { useHistory } from "react-router-dom";

export default function User(props) {
  
// let history = useHistory();

  const [userInfo, setUserInfo] = useState({});

//   if (!props.currentUser) {
//     history.push("/home");
//   } else {

    
    const user = props.currentUser
    console.log(user)
    // const { id } = props.currentUser;
    // console.log(id)
    useEffect(() => {
      API.getCurrentUserInfo(props.currentUser.id).then((res) => {
        setUserInfo(res.data);
        console.log(userInfo);
      });
    }, []);

    return (
      <div>
        <UserInfo user={userInfo} />

        {/* //TODO::CONVERT THIS SPACE INTO HALL INFO RENDER  */}
        {/* <UserHalls /> */}
        {/* pieceofstatethathasallmyhalls.map(hall => <UserHalls name=pieceofstate.name etc />)*/}
      </div>
    );

//this brace ends the conditional reroute, hook use in early return failed
//   }
}