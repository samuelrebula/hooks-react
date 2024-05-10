import React from "react";
import { useState, useEffect } from "react";

interface ItemType {
  id: number;
  title: string;
}

const HookUseEffect: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const responseJSON = await response.json();

      setItems(responseJSON);
    };

    fetchResourceTypes();
  }, [resourceType]);

  // useEffect(() => {
  //   // componentsDidMount
  //   console.log("componentsDidMount");

  //   return () => {
  //     // componentWillUnmount
  //     console.log("componentWillUnmount");
  //   };
  // }, []);

  const changeResourceType = (resourceType: React.SetStateAction<string>) => {
    setResourceType(resourceType);
  };

  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>

      {items.map((item) => (
        <p>
          {item.title} {item.id}
        </p>
      ))}
    </div>
  );
};

export default HookUseEffect;
