import React, { Component } from "react";
import Row from "../Row";
import Col from "../Col";
import Table from "../Table";
import Form from "../Form";
import Container from "../Container";
import API from "../../utils/API";

class DataBaseContainer extends Component {
  state = {
    search: "",
    error: "",
    results: [],
    filtered: []
  };


  // When the component mounts, get a list of twenty five randomly generated employees update this.state.results
  componentDidMount() {
    API.getEmployeeDatabase()
      .then(res => this.setState({ results: res.data.results, filtered: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value.toLowerCase();
    const name = event.target.name;
    this.setState({
      [name]: value,
      filtered: this.state.results.filter(e => e.name.first.toLowerCase().includes(value) ||
        e.name.last.toLowerCase().includes(value))
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <Form
            value={this.state.search}
            handleInputChange={this.handleInputChange}
          />
          <Col size="md-12">
            <Table
              results={this.state.filtered}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DataBaseContainer;
