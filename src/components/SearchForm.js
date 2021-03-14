import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const SearchForm = () => {
  return (
    <div className="container-fluid p-3 bg-danger">
      <Form className="bg-info">
        <Row form>
          <Col>
            <Input
              type="text"
              name="search-term"
              id="search"
              placeholder="Search - chicken, beef, pasta..."
            />
          </Col>
        </Row>

        <Row form className="my-3">
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Dish Type</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Diet</Label>

              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Cuisine</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6} className="text-right">
            <Button>Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
