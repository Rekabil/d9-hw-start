import { Button, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoritAction } from "../redux/action";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorite.companies);
  const dispatch = useDispatch();
  console.log(favorites);

  return (
    <Row>
      <ListGroup variant="flush">
        {favorites.length > 0 ? (
          favorites.map((fav, i) => (
            <ListGroup.Item key={i}>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(removeFavoritAction(i));
                }}
              >
                Remove Favorite
              </Button>
              {fav.company_name}
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>You Dont Have Favorite</ListGroup.Item>
        )}
      </ListGroup>
    </Row>
  );
};
export default Favorite;
