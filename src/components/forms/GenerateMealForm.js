import React from "react";
import { useDispatch } from "react-redux";
import { Col, Row, Form, FormGroup, Label } from "reactstrap";
import { useForm } from "react-hook-form";

import { DIET } from "../../shared/data";
import CustomButton from "../CustomButton";
import { fetchMeals } from "../../actions/mealsActions";
import "./Forms.css";

const GenerateMealForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(fetchMeals(data));
  };

  return (
    <div className="container px-5 py-3 search-form_container">
      <h2 className="text-center mx-auto mt-3 mb-5">Create a Meal Plan</h2>
      <Form className="search-form" onSubmit={handleSubmit(onSubmit)}>
        <Row form className="my-md-3 justify-content-around">
          <Col md={6} lg={5}>
            <FormGroup row className="align-items-start">
              <Label for="calories" sm={2}>
                Calories
              </Label>
              <Col sm={10}>
                <input
                  type="text"
                  id="calories"
                  name="calories"
                  ref={register({
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Please enter a number",
                    },
                  })}
                  className="search-form_input form-control"
                  placeholder="Caloric target for one day"
                />

                {errors.calories && (
                  <p className="form-error-message">
                    {errors.calories.message}
                  </p>
                )}
              </Col>
            </FormGroup>
          </Col>
          <Col md={6} lg={5}>
            <FormGroup row className="align-items-center">
              <Label for="diet1" sm={2}>
                Diet
              </Label>
              <Col sm={10}>
                <select
                  type="select"
                  id="diet1"
                  name="diet"
                  className="search-form_input form-control"
                  ref={register}
                >
                  {DIET.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </Col>
            </FormGroup>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <CustomButton buttonLabel="Generate" />
        </Row>
      </Form>
    </div>
  );
};

export default GenerateMealForm;
