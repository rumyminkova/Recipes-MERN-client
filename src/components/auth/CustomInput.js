import React from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

const CustomInput = (props) => {
  return (
    <FormGroup>
      <Label for={props.id}>{props.label}</Label>
      <InputGroup size="lg">
        <Input
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.handleChange}
          required
        />
        {props.name === "password" ? (
          <InputGroupAddon addonType="append">
            <span className="ml-3" onClick={props.handleShowPassword}>
              {props.type === "password" ? (
                <VscEyeClosed
                  size="1.7rem"
                  style={{ verticalAlign: "middle", cursor: "pointer" }}
                />
              ) : (
                <VscEye
                  size="1.7rem"
                  style={{ verticalAlign: "middle", cursor: "pointer" }}
                />
              )}
            </span>
          </InputGroupAddon>
        ) : null}
      </InputGroup>
    </FormGroup>
  );
};

export default CustomInput;
