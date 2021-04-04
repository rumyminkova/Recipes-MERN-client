import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { AiFillLock } from "react-icons/ai";

import CustomInput from "./CustomInput";
import CustomButton from "../CustomButton";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleSubmit = () => {};
  const handleChange = () => {};

  const isSignUp = true;

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={10} md={6} lg={5} className="bg-light p-5">
          <p className="text-center mb-4">
            <AiFillLock size="3rem" style={{ color: "#ffaf2a" }} />
          </p>
          <h2 className="text-center mb-5">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <Form>
            {isSignUp && (
              <CustomInput
                type="text"
                name="name"
                id="name"
                label="Name"
                handleChange={handleChange}
              />
            )}
            <CustomInput
              type="email"
              name="email"
              id="email"
              label="Email"
              handleChange={handleChange}
            />
            <CustomInput
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <CustomInput
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
              />
            )}
            <div className="text-center mt-3">
              <CustomButton buttonLabel={isSignUp ? "Sign Up" : "Sign In"} />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
