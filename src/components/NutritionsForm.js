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
import InputRange from "react-input-range";

import CustomButton from "./CustomButton";
import { fetchRecipesByNutrients } from "../actions/nutrientsActions";
import "./NutritionsForm.css";
import "react-input-range/lib/css/index.css";

const NutritionsForm = () => {
  // const initialFormState = {
  //   minCalories: 0,
  //   maxCalories: 0,
  //   minCarbs: 0,
  //   maxCarbs: 0,
  //   minProtein: 0,
  //   maxProtein: 0,
  //   minFat: 0,
  //   maxFat: 0,
  // };
  const initialFormState = {
    calories: { min: 0, max: 3000 },
    carbs: { min: 0, max: 500 },
    fat: { min: 0, max: 500 },
    protein: { min: 0, max: 500 },
  };

  const [formData, setFormData] = useState(initialFormState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // dispatch(fetchRecipesByNutrients(formData));
    // setFormData(initialFormState);
  };

  return (
    <div className="container px-5 py-3 search-form_container">
      <h2 className="text-center mx-auto mt-3 mb-5">
        Search Recipes by Nutrients
      </h2>
      <Form className="search-form" onSubmit={handleSubmit}>
        <Row form className="my-md-3 justify-content-around">
          <Col md={5} lg={4}>
            <FormGroup row className="align-items-center">
              <Label for="max-cal">Calories</Label>
              {/* <Input
                type="range"
                name="max-cal"
                id="max-cal"
                min="0"
                max="3000"
                value={formData.calories}
                onChange={(value) =>
                  setFormData({ ...formData, calories: value })
                }
              /> */}
              <InputRange
                draggableTrack
                maxValue={3000}
                minValue={0}
                value={formData.calories}
                onChange={(value) =>
                  setFormData({ ...formData, calories: value })
                }
                onChangeComplete={(value) => console.log(value)}
              />
            </FormGroup>
          </Col>
          <Col md={5} lg={4}>
            <FormGroup row className="align-items-center">
              <Label for="max-protein">Protein: {formData.maxProtein}</Label>
              <Input
                type="range"
                name="max-protein"
                id="max-protein"
                min="0"
                max="500"
                value={formData.maxProtein}
                onChange={(e) =>
                  setFormData({ ...formData, maxProtein: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form className="my-md-3 justify-content-around">
          <Col md={5} lg={4}>
            <FormGroup row className="align-items-center">
              <Label for="max-fat">Fat: {formData.maxFat}</Label>
              <Input
                type="range"
                name="max-fat"
                id="max-fat"
                min="0"
                max="500"
                value={formData.maxFat}
                onChange={(e) =>
                  setFormData({ ...formData, maxFat: e.target.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={5} lg={4}>
            <FormGroup row className="align-items-center">
              <Label for="max-carbs">Carbs: {formData.maxCarbs}</Label>
              <Input
                type="range"
                name="max-carbs"
                id="max-carbs"
                min="0"
                max="500"
                value={formData.maxCarbs}
                onChange={(e) =>
                  setFormData({ ...formData, maxCarbs: e.target.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <CustomButton buttonLabel="Search" />
        </Row>
      </Form>
    </div>
  );
};

export default NutritionsForm;
