import React, { useState } from "react";
import { Container, Col, Row, Form } from "reactstrap";
import { AiFillLock } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";
// import { GoogleLogin } from "react-google-login";
// import { GOOGLE_CLIENT_ID } from "../../config";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import CustomInput from "./CustomInput";
import CustomButton from "../CustomButton";
import { signin, signup } from "../../actions/auth/auth";

const Auth = () => {
  const formInitialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(formInitialState);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;
  //   try {
  //     dispatch({ type: "AUTH", payload: { result, token } });
  //     history.push("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const googleFailure = (err) => {
  //   console.log("Google sign in Failed", err);
  // };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={10} md={6} lg={5} className="bg-light p-4">
          <p className="text-center mb-4">
            <AiFillLock size="3rem" style={{ color: "#ffaf2a" }} />
          </p>
          <h2 className="text-center mb-5">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <Form onSubmit={submitForm}>
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
              <CustomButton
                buttonLabel={isSignUp ? "Sign Up" : "Sign In"}
                type="submit"
                tooltip={false}
                tooltipText=""
              />
            </div>
            <div className="my-3 d-flex justify-content-end">
              <button
                onClick={switchMode}
                className="btn btn-lg sign-in-up-btn"
              >
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </button>
            </div>
            {/* <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <Button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  block
                  outline
                  color="secondary"
                  className="btn-lg my-5"
                >
                  <FcGoogle
                    size="2rem"
                    style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
                  />
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={"single_host_origin"}
            /> */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
