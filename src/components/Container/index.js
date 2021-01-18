import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import TableHeader from "./TableHeader";
import Table from "./Table";
import API from "../utils/API";

class Container extends Component {
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
              <TableHeader />
              <Table         
                src={this.state.result.picture.thumbnail}
                firstname={this.state.results.name.first}
                firstname={this.state.results.name.last}
                email={this.state.results.email}
                phone={this.state.results.phone}
                dob={this.state.results.dob}
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

export default Container;
