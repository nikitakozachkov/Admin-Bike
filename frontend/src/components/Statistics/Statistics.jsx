import styles from "./Statistics.module.css";

export const Statistics = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Statistics</p>

      <ul className={styles.list}>
        <li>
          Total Bikes: <span>0</span>
        </li>

        <li>
          Available Bikes: <span>0</span>
        </li>

        <li>
          Booked Bikes: <span>0</span>
        </li>

        <li>
          Average bike cost: <span>0.00</span> UAH/hr.
        </li>
      </ul>
    </div>
  );
};
