import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import { DISH_TYPE, DIET, CUISINE } from "../shared/data";
import { fetchRecipes } from "../actions/recipesActions";

const SearchForm = () => {
  const initialFormState = {
    searchTerm: "",
    dishType: "",
    diet: "",
    cuisine: "",
  };
  const [formData, setFormData] = useState(initialFormState);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRecipes(formData));
  };

  return (
    <div className="container-fluid p-3 bg-danger">
      <Form className="bg-info" onSubmit={handleSubmit}>
        <Row form>
          <Col>
            <Input
              type="text"
              id="searchTerm"
              placeholder="Search - chicken, beef, pasta..."
              onChange={(e) =>
                setFormData({ ...formData, searchTerm: e.target.value })
              }
            />
          </Col>
        </Row>

        <Row form className="my-3">
          <Col sm={6}>
            <FormGroup>
              <Label for="dishType">Dish Type</Label>
              <Input
                type="select"
                id="dishType"
                onChange={(e) =>
                  setFormData({ ...formData, dishType: e.target.value })
                }
              >
                {DISH_TYPE.map((dt) => (
                  <option key={dt}>{dt}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup>
              <Label for="diet">Diet</Label>

              <Input
                type="select"
                id="diet"
                onChange={(e) =>
                  setFormData({ ...formData, diet: e.target.value })
                }
              >
                {DIET.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col sm={6}>
            <FormGroup>
              <Label for="cuisine">Cuisine</Label>
              <Input
                type="select"
                id="cuisine"
                onChange={(e) =>
                  setFormData({ ...formData, cuisine: e.target.value })
                }
              >
                {CUISINE.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Button type="submit">Search</Button>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
