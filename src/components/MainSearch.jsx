import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
          <Button onClick={() => navigate("/favorite")}>Favorites</Button>
        </Col>

        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <div key={jobData._id}>
              <Job key={jobData._id} data={jobData} />
              <Button
                variant="outline-dark"
                onClick={() => {
                  dispatch({ type: "ADD_FAVORITE", payload: jobData });
                }}
              >
                Add Favorite
              </Button>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
