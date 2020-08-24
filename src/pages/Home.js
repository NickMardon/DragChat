import React, { useState } from "react";
import Webcam from "../components/Webcam/Webcam";
import Description from "../components/Description/Description";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import { Row, Col } from "antd";
import Review from "../components/Reviews/Reviews";
export default function Home(props) {
  const [isLoggedIn] = useState(props.currentUser?.id ? true : false, [
    props.currentUser,
  ]);

  return (
    <div>
      <Row>
        <Description
          isLoggedIn={isLoggedIn}
          setCurrentUser={props.setCurrentUser}
          currentUser={props.currentUser}
          getHalls={props.getHalls}
        />
      </Row>
      <Row gutter={[0, 8]}>
        <Webcam />
        <Card />
      </Row>
      <Row>
        <Review
          review={<q>"I can't wait to use this for game night happy hour!"</q>}
          reviewer="Dr. Acula"
        />
        <Review
          review={<q>"Teaching students online has never been easier than with Videezy"</q>}
          reviewer="Charles Snarleston PhD"
        />
        <Review
          review={<q>"Working remotely is a breeze with Videezy"</q>}
          reviewer="Brad Vandez CEO"
        />
      </Row>
      <Footer />
    </div>
  );
}
