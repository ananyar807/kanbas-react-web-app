import Assignment3 from "./a3";
import Nav from "../Nav";
import { Link } from "react-router-dom";
export default function Labs() {
  return (
    <div>
      <Nav />
      {/* <Link to="/Labs/a3">A3</Link> |<Link to="/Kanbas">Kanbas</Link> |
      <Link to="/hello">Hello</Link> | */}
      <Assignment3 />
    </div>
  );
}
