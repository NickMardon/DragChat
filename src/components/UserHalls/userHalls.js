import React from "react";
import { Card } from "antd";
import Button from "../Button/Button";
import { Row, Col } from "antd";
import "./index.css";
import { useHistory } from "react-router-dom";
import API from "../../utils/api";

export default function UserHalls(props) {
    let history = useHistory();

    const connectBtnClick = () => {
        history.push(`/hall/${props.props.id}`)
    }

    const deleteBtnClick = () => {
      API.deleteHallById(props.props.id).then(()=>{
        // console.log("hey this is the deleteBtnClick")
        window.location.reload();
        })
        // TODO: make API CALL TO DELETE ROUTER, AND LOCATION.RELOAD
    }
  return (
    <div className="col">
      {props.props && props.props.name ? (
        <Card
          title={props.props.name}
          extra={<Button buttonType="connect" text="connect" onClick={connectBtnClick} />}
          style={{
            width: "96%",
            margin: "2%",
            fontSize: "1.5em",
            opacity: ".8",
          }}
        >
          <Row>
            <p>Number of rooms: {props.props.hallSize}</p>
          </Row>
          <Row>
            <p>Password: {props.props.password}</p>
          </Row>
          <Row>
            <p>Description: {props.props.description}</p>
          </Row>
          <Row justify="end">
          <Button buttonType="delete" text="delete" onClick={deleteBtnClick} />
          </Row>
        </Card>
      ) : (
        <h1>this is no bueno</h1>
      )}
    </div>
  );
}
