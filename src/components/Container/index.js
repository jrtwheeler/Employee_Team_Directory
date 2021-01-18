import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./EmployeeDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployeeDatabase()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for an Employee"}
            >
              <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeContainer;
