
import { Badge } from "react-bootstrap";

const Tags = (props) => {
    return (
        <Badge bg={props.color}>{props.btnNombre}</Badge>
    )
}
export default Tags;