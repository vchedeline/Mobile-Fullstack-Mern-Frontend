import { useParams } from "react-router";

export default function SubMenu({ menu }) {
  const { id } = useParams();
  const items = menu.filter((i) => i.group === id);
  console.log(items);

  return (
    <main>
      <h1>{id}</h1>
      {items.map((ele, idx) => {
        return (
          <div key={idx}>
            <h2>{ele.name}</h2>
            <h3>{ele.price}</h3>
          </div>
        );
      })}
    </main>
  );
}
