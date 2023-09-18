import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavoriteAction, getJobsAction } from "../redux/action";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobs = useSelector((state) => state.jobs.content);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(getJobsAction(query));
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
                  dispatch(addFavoriteAction(jobData));
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
