import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useDispatch } from "react-redux";
import { addBike } from "redux/bikes/actions";
import styles from "./Form.module.css";

const validationSchema = zod
  .object({
    name: zod
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(5, { message: "Field must contain at least 5 characters." })
      .trim(),
    type: zod
      .string({
        required_error: "Type is required",
        invalid_type_error: "Type must be a string",
      })
      .min(5, { message: "Field must contain at least 5 characters." })
      .trim(),
    color: zod
      .string({
        required_error: "Color is required",
        invalid_type_error: "Color must be a string",
      })
      .min(5, { message: "Field must contain at least 5 characters." }),
    wheelSize: zod.number({
      required_error: "Wheel size is required",
      invalid_type_error: "Wheel size must be a number",
    }),
    price: zod.number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }),
    id: zod
      .string({
        required_error: "ID is required",
        invalid_type_error: "ID must be a string",
      })
      .min(5, { message: "Field must contain at least 5 characters." })
      .trim(),
    description: zod
      .string({
        required_error: "Description is required",
        invalid_type_error: "Description must be a string",
      })
      .min(5, { message: "Field must contain at least 5 characters." })
      .trim(),
  })
  .required();

export const Form = () => {
  const dispatch = useDispatch();
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
        dispatch(addBike(data));
        reset();
      })}
    >
      <ul className={styles.list}>
        <li>
          <input
            {...register("name")}
            placeholder="Name"
            type="text"
            className={styles.input}
            minLength={5}
          />

          {errors && <p>{errors.name?.message}</p>}
        </li>

        <li>
          <input
            {...register("type")}
            placeholder="Type"
            type="text"
            className={styles.input}
            minLength={5}
          />

          {errors && <p>{errors.type?.message}</p>}
        </li>

        <li>
          <input
            {...register("color")}
            placeholder="Color"
            type="text"
            className={styles.input}
            minLength={5}
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
            minLength={5}
          />

          {errors && <p>{errors.id?.message}</p>}
        </li>

        <li>
          <textarea
            {...register("description")}
            placeholder="Description"
            className={styles.textarea}
            minLength={5}
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
