import { ListItem } from "components/ListItem/ListItem";
import styles from "./List.module.css";

const bikes = [
  {
    name: "awas",
    type: "type",
    color: "color",
    id: "id",
    bikeStatus: "Available",
    price: "00.00",
  },
  {
    name: "wasd",
    type: "type",
    color: "color",
    id: "wasd",
    bikeStatus: "Unavailable",
    price: "00.00",
  },
  {
    name: "bax",
    type: "type",
    color: "color",
    id: "bax",
    bikeStatus: "Busy",
    price: "00.00",
  },
];

export const List = () => {
  return (
    <ul className={styles.list}>
      {bikes.map(({ name, type, color, id, bikeStatus, price }) => (
        <ListItem
          key={id}
          name={name}
          type={type}
          color={color}
          id={id}
          bikeStatus={bikeStatus}
          price={price}
        />
      ))}
    </ul>
  );
};
