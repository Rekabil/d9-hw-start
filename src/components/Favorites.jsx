import { Button, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Favorite = () => {
  const favorite = useSelector((state) => state.favorite.companies);
  const dispatch = useDispatch();
  console.log(favorite);

  return (
    <Row>
      <ListGroup variant="flush">
        {favorite.length > 0 ? (
          favorite.map((fav, i) => (
            <ListGroup.Item key={i}>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({ type: "REMOVE_FAVORITE", payload: i });
                }}
              >
                Remove Favorite
              </Button>
              {fav.company_name}
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>Your cart is empty</ListGroup.Item>
        )}
      </ListGroup>
    </Row>
  );
};
export default Favorite;
