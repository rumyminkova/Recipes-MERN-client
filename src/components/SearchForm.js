import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import { DISH_TYPE, DIET, CUISINE } from "../shared/data";
import { fetchRecipes } from "../actions/recipesActions";
import "./SearchForm.css";

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
    <div className="container-fluid p-3 search-form_container">
      <h4 className="text-center my-3">Search recipes</h4>
      <Form className="" onSubmit={handleSubmit}>
        <Row form className="mb-3">
          <Col>
            <Input
              type="text"
              id="searchTerm"
              placeholder="Chicken, beef, pasta, cake..."
              onChange={(e) =>
                setFormData({ ...formData, searchTerm: e.target.value })
              }
            />
          </Col>
        </Row>

        <Row form className="my-3">
          <Col sm={6}>
            <FormGroup row>
              <Label for="dishType" sm={2}>
                Type
              </Label>
              <Col sm={9}>
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
              </Col>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label for="diet" sm={2}>
                Diet
              </Label>
              <Col sm={9}>
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
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col sm={6}>
            <FormGroup row>
              <Label for="cuisine" sm={2}>
                Cuisine
              </Label>
              <Col sm={9}>
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
              </Col>
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
