import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div>
        <Link to={"/"}>HOME</Link>
      </div>
      <div>
        <Link to={"/"}>NEW ORDER</Link>
      </div>
      <div>
        <Link to={"/pastorders"}>ALL ORDERS</Link>
      </div>
      <div>
        <Link to={"/"}>LOGOUT</Link>
      </div>
    </>
  );
}
