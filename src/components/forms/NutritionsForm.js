import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Row, Form, FormGroup, Label } from "reactstrap";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import CustomButton from "../CustomButton";
import { fetchRecipesByNutrients } from "../../actions/nutrientsActions";
import "./NutritionsForm.css";

const NutritionsForm = () => {
  const initialFormState = {
    calories: { min: 0, max: 700 },
    carbs: { min: 0, max: 100 },
    fat: { min: 0, max: 10 },
    protein: { min: 0, max: 25 },
  };

  const [formData, setFormData] = useState(initialFormState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRecipesByNutrients(formData));
  };

  return (
    <div className="container px-5 py-3 search-form_container">
      <h2 className="text-center mx-auto mt-3 mb-5">
        Search Recipe by Nutrients
      </h2>
      <Form className="nutrients-form" onSubmit={handleSubmit}>
        <Row form className="my-md-3 justify-content-around">
          <Col md={5} lg={4}>
            <FormGroup
              row
              className="align-items-center justify-content-center"
            >
              <Label for="cal">Calories</Label>
              <InputRange
                name="cal"
                maxValue={1000}
                minValue={0}
                value={formData.calories}
                onChange={(value) =>
                  setFormData({ ...formData, calories: value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={5} lg={4}>
            <FormGroup
              row
              className="align-items-center justify-content-center"
            >
              <Label for="protein">Protein</Label>
              <InputRange
                name="protein"
                draggableTrack
                maxValue={50}
                minValue={0}
                value={formData.protein}
                onChange={(value) =>
                  setFormData({ ...formData, protein: value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form className="my-md-3 justify-content-around">
          <Col md={5} lg={4}>
            <FormGroup
              row
              className="align-items-center justify-content-center"
            >
              <Label for="fat">Fat</Label>
              <InputRange
                name="fat"
                maxValue={50}
                minValue={0}
                value={formData.fat}
                onChange={(value) => setFormData({ ...formData, fat: value })}
              />
            </FormGroup>
          </Col>
          <Col md={5} lg={4}>
            <FormGroup
              row
              className="align-items-center  justify-content-center"
            >
              <Label for="carbs">Carbs</Label>
              <InputRange
                name="carbs"
                maxValue={200}
                minValue={0}
                value={formData.carbs}
                onChange={(value) => setFormData({ ...formData, carbs: value })}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <CustomButton buttonLabel="Search" type="submit" />
        </Row>
      </Form>
    </div>
  );
};

export default NutritionsForm;
