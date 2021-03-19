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
    setFormData(initialFormState);
  };

  return (
    <div className="container p-2 search-form_container">
      <Form className="" onSubmit={handleSubmit}>
        <Row form className="my-3 justify-content-around">
          <Col sm={6} md={5}>
            <FormGroup row className="align-items-center">
              <Label for="searchTerm" sm={2}>
                Search
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  id="searchTerm"
                  placeholder="Chicken, beef, pasta, cake..."
                  value={formData.searchTerm}
                  onChange={(e) =>
                    setFormData({ ...formData, searchTerm: e.target.value })
                  }
                />
              </Col>
            </FormGroup>
          </Col>
          <Col sm={6} md={5}>
            <FormGroup row className="align-items-center">
              <Label for="dishType" sm={2}>
                Type
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  id="dishType"
                  value={formData.dishType}
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
        </Row>

        <Row form className="my-3 justify-content-around">
          <Col sm={6} md={5}>
            <FormGroup row className="align-items-center">
              <Label for="diet" sm={2}>
                Diet
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  id="diet"
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
          <Col sm={6} md={5}>
            <FormGroup row className="align-items-center">
              <Label for="cuisine" sm={2}>
                Cuisine
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  id="cuisine"
                  value={formData.cuisine}
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

        <Row className="justify-content-center">
          <Button type="submit">Search</Button>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
