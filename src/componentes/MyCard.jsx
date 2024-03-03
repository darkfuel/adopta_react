import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = (props) => {
  return (
    <Card style={{ width: "250px" }}>
      <Card.Img
        variant="top"
        src={props.imagen}
        style={{ width: "180px", height: "180px"}}
        alt="perro-adopcion"
      />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>{props.descrip}</Card.Text>
      </Card.Body>
      <Tags color={props.color} btnNombre={props.btnNombre} />
    </Card>
  )
}
export default MyCard;
