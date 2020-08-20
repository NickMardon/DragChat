import React, {useState, useEffect} from 'react'
import UserInfo from "../components/UserInfo/userInfo"
import UserHalls from "../components/UserHalls/userHalls"
import API from '../utils/api'


export default function User(props) {
  

  const [userInfo, setUserInfo] = useState({});
    
    useEffect(() => {
    props.currentUser?.id? (
          API.getCurrentUserInfo(props.currentUser.id).then((res) => {
                setUserInfo(res.data);
              })
    ) : setUserInfo({})
    }, [props.currentUser]);


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