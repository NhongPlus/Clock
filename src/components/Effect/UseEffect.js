import { useEffect, useState } from "react";

const UseEffect3 = () => {
  const [tab, setTab] = useState("products");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/${tab}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[tab]);
      });
  }, [tab]);

  return (
    <>
      <button onClick={() => setTab("products")}>Products</button>
      <button onClick={() => setTab("posts")}>Posts</button>

      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UseEffect3;
