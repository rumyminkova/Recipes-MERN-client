import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

import { DIET } from "../../shared/data";
import CustomButton from "../CustomButton";
import { fetchMeals } from "../../actions/mealsActions";
import "./SearchForm.css";

const GenerateMealForm = () => {
  const initialFormState = {
    calories: "",
    diet: "",
    errors: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchMeals(formData));
    setFormData(initialFormState);
  };

  return (
    <div className="container px-5 py-3 search-form_container">
      <h2 className="text-center mx-auto mt-3 mb-5">Create a Meal Plan</h2>
      <Form className="search-form" onSubmit={handleSubmit}>
        <Row form className="my-md-3 justify-content-around">
          <Col md={6} lg={5}>
            <FormGroup row className="align-items-center">
              <Label for="calories" sm={2}>
                Calories
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  id="calories"
                  className="search-form_input"
                  placeholder="Caloric target for one day"
                  value={formData.calories}
                  onChange={(e) =>
                    setFormData({ ...formData, calories: e.target.value })
                  }
                />
                <FormFeedback>{formData.errors}</FormFeedback>
              </Col>
            </FormGroup>
          </Col>
          <Col md={6} lg={5}>
            <FormGroup row className="align-items-center">
              <Label for="diet1" sm={2}>
                Diet
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  id="diet1"
                  className="search-form_input"
                  value={formData.diet}
                  onChange={(e) =>
                    setFormData({ ...formData, diet: e.target.value })
                  }
                >
                  {DIET.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </Input>
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
