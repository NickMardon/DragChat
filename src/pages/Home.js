import React, {useState} from "react";
import Webcam from "../components/Webcam/Webcam";
import Description from "../components/Description/Description";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import { Row } from 'antd';
import Review from "../components/Reviews/Reviews";
export default function Home(props) {
  const [isLoggedIn,] = useState(props.currentUser?.id? true : false, [props.currentUser])

  return (
    <div>
      {/* <Jitsi /> */}
      <Description 
      isLoggedIn={isLoggedIn} 
      setCurrentUser={props.setCurrentUser} 
      currentUser={props.currentUser} 
      getHalls={props.getHalls}
      />
      <Row>
      <Webcam />
      <Card />
      </Row>
      <Row>
        <Review 
        review={<q>"I can't wait to use this for game night happy hour!"</q>} reviewer="Dr. Acula"
        />
        <Review
           review={<q>"This app is really good"</q>} reviewer="The Big Lebowski"
        />
        <Review 
           review={<q>"This app is really good"</q>} reviewer="Kanye West"
        />
      </Row>
      <Footer />
    </div>
  );
}
