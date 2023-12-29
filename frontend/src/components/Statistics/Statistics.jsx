import { useSelector } from "react-redux";
import { getTotalLength, getAllAvailable, getAllBooked, getAveragePrice } from "redux/bikes/selectors";
import styles from "./Statistics.module.css";

export const Statistics = () => {
  const total = useSelector(getTotalLength);
  const available = useSelector(getAllAvailable);
  const booked = useSelector(getAllBooked);
  const averagePrice = useSelector(getAveragePrice);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Statistics</p>

      <ul className={styles.list}>
        <li>
          Total Bikes: <span>{total ?? 0}</span>
        </li>

        <li>
          Available Bikes: <span>{available ?? 0}</span>
        </li>

        <li>
          Booked Bikes: <span>{booked ?? 0}</span>
        </li>

        <li>
          Average bike cost: <span>{averagePrice ? averagePrice : 0}</span> UAH/hr.
        </li>
      </ul>
    </div>
  );
};
