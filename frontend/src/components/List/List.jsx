import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBikes } from "redux/bikes/actions";
import { getAll } from "redux/bikes/selectors";
import { ListItem } from "components/ListItem/ListItem";
import styles from "./List.module.css";

export const List = () => {
  const dispatch = useDispatch();

  const bikes = useSelector(getAll);

  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  return (
    <>
      {bikes.length > 0 ? (
        <ul className={styles.list}>
          {bikes.map(({ _id, name, type, color, id, status, price }) => (
            <ListItem
              key={_id}
              name={name}
              type={type}
              color={color}
              id={_id}
              bikeId={id}
              status={status}
              price={price}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.placeholder}>No bikes yet</p>
      )}
    </>
  );
};
