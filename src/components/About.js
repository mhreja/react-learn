import React from "react";
import Layouts from "./layouts/Layouts";
import { Button } from "react-bootstrap";

class About extends React.Component {
  render() {
    return (
      <Layouts>
        <Button variant="danger">Hello</Button>
      </Layouts>
    );
  }
}

export default About;
