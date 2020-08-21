import React, {useState, useEffect} from 'react'
import UserInfo from "../components/UserInfo/userInfo"
import UserHalls from "../components/UserHalls/userHalls"
import API from '../utils/api'


export default function User(props) {
  

  const [userInfo, setUserInfo] = useState({});
  const [userHall, setUserHall] = useState({});

    useEffect(() => {
    props.currentUser?.id? (
          API.getCurrentUserInfo(props.currentUser.id).then((res) => {
                setUserInfo(res.data);
              })
    ) : setUserInfo({})
    }, [props.currentUser]);

    // useEffect(() => {
    // props.currentUser?.id? (
    //     setUserHall(props.userHalls)
    // ) : setUserHall({})
    // }, [props.currentUser]);

    // let Halls = this.state.userHalls.map

    return (
      <div>
      {userInfo?.name? 
      <UserInfo user={userInfo} /> : 
      <h1>please wait while we load your information (unless you are not logged in)</h1>}
      {props.userHalls&&props.userHalls[0]?props.userHalls.map(halls => <UserHalls props ={halls}/>):<h1>it's madness</h1>}
   
        
      </div>
    );

//this brace ends the conditional reroute, hook use in early return failed
//   }
}