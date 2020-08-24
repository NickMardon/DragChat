import React, {useState, useEffect} from 'react'
import UserInfo from "../components/UserInfo/userInfo"
import UserHalls from "../components/UserHalls/userHalls"
import API from '../utils/api'
import "../index.css"
import { Row, Col } from 'antd';
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
      <div className="backGround">
        <Row>
          <Col s = {24} md ={24} lg={24} style={{width:"100%"}}>
            {userInfo?.name? 
            <UserInfo user={userInfo} /> : 
            <h1>please wait while we load your information (unless you are not logged in)</h1>}
          </Col>
            {props.userHalls&&props.userHalls[0]?
            props.userHalls.map(halls => <Col s = {24} md ={12} lg={8} style={{width:"100%"}}><UserHalls props={halls}/></Col>):<span></span>}
      </Row>
    </div>
    );

//this brace ends the conditional reroute, hook use in early return failed
//   }
}