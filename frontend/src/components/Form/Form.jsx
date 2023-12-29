import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addBike } from "redux/bikes/actions";
import { getAll } from "redux/bikes/selectors";
import { validationSchema } from "schemas/formValidationSchema";
import styles from "./Form.module.css";

export const Form = () => {
  const dispatch = useDispatch();
  const bikes = useSelector(getAll);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit((data) => {
        const filtered = bikes.find(({ id }) => id.toLowerCase() === data.id.toLowerCase());

        if (!filtered) {
          dispatch(addBike(data));
          reset();
        } else {
          toast.error("Bike with the same ID already exists");
        }
      })}
    >
      <ul className={styles.list}>
        <li>
          <input
            {...register("name")}
            placeholder="Name"
            type="text"
            className={styles.input}
          />

          {errors && <p>{errors.name?.message}</p>}
        </li>

        <li>
          <input
            {...register("type")}
            placeholder="Type"
            type="text"
            className={styles.input}
          />

          {errors && <p>{errors.type?.message}</p>}
        </li>

        <li>
          <input
            {...register("color")}
            placeholder="Color"
            type="text"
            className={styles.input}
          />

          {errors && <p>{errors.color?.message}</p>}
        </li>

        <li>
          <input
            {...register("wheelSize", { valueAsNumber: true })}
            placeholder="Wheel size"
            type="text"
            className={styles.input}
          />

          {errors && <p>{errors.wheelSize?.message}</p>}
        </li>

        <li>
          <input
            {...register("price", { valueAsNumber: true })}
            placeholder="Price"
            type="text"
            className={styles.input}
          />

          {errors && <p>{errors.price?.message}</p>}
        </li>

        <li>
          <input
            {...register("id")}
            placeholder="ID (slug): ХХХХХХХХХХХХХ"
            type="text"
            className={styles.input}
          />

          {errors && <p>{errors.id?.message}</p>}
        </li>

        <li>
          <textarea
            {...register("description")}
            placeholder="Description"
            className={styles.textarea}
          />

          {errors && <p>{errors.description?.message}</p>}
        </li>
      </ul>

      <ul className={styles.controls}>
        <li>
          <button type="submit" className={styles.button}>
            Save
          </button>
        </li>

        <li>
          <button type="reset" className={styles.button}>
            Clear
          </button>
        </li>
      </ul>
    </form>
  );
};
