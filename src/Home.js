import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);

  .loginText{
    width=75%;
    height:70%;
  }

`
  
;
export const Home = props => (
  <GridWrapper>
    <Form>
      <h1>LOGIN</h1>
      <Form.Group  controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  </GridWrapper>
);
