import React, {useState} from "react";
import Webcam from "../components/Webcam/Webcam";
import Description from "../components/Description/Description";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
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
      <Webcam />
      <Card />
      <Footer />
    </div>
  );
}
