import { useEffect, useState } from "react";

interface Item {
  id: number;
  title?: string;
  name?: string;
}

interface ListProps {
  getItems: () => Promise<Item[]>;
}

const List: React.FC<ListProps> = ({ getItems }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    getItems().then((result) => setItems(result));
  }, [getItems]);

  return (
    <>
      {items &&
        items.map((item) => <p key={item.id}>{item.title || item.name}</p>)}
    </>
  );
};

export default List;
