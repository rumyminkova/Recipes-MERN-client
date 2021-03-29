import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";

import { DISH_TYPE, DIET, CUISINE } from "../../shared/data";
import CustomButton from "../CustomButton";
import { fetchRecipes } from "../../actions/recipesActions";
import "./Forms.css";

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
    <div className="container px-5 py-3 search-form_container">
      <h2 className="text-center mx-auto mt-3 mb-5">Search Recipes</h2>
      <Form className="search-form" onSubmit={handleSubmit}>
        <Row form className="my-md-3 justify-content-around">
          <Col md={6} lg={5}>
            <FormGroup row className="align-items-center">
              <Label for="searchTerm" sm={2}>
                Search
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  id="searchTerm"
                  className="search-form_input"
                  placeholder="Chicken, beef, pasta, cake..."
                  value={formData.searchTerm}
                  onChange={(e) =>
                    setFormData({ ...formData, searchTerm: e.target.value })
                  }
                />
              </Col>
            </FormGroup>
          </Col>
          <Col md={6} lg={5}>
            <FormGroup row className="align-items-center">
              <Label for="dishType" sm={2}>
                Type
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  id="dishType"
                  className="search-form_input"
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

        <Row form className="my-md-3 justify-content-around">
          <Col md={6} lg={5}>
            <FormGroup row className="align-items-center">
              <Label for="diet" sm={2}>
                Diet
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  id="diet"
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
          <Col md={6} lg={5}>
            <FormGroup row className="align-items-center">
              <Label for="cuisine" sm={2}>
                Cuisine
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  id="cuisine"
                  className="search-form_input"
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
          <CustomButton buttonLabel="Search">Search</CustomButton>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
