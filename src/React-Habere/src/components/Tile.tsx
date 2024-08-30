import {Link} from "react-router-dom";

function Tile(props: {title:string, content:string, to:string}) {
  return (
    <Link className="tile" to={props.to}>
      <h2 className="tile-title">{props.title}</h2>
      <p className="tile-content">{props.content}</p>
    </Link>
  );
}

export default Tile;