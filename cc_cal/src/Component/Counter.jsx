import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Add,
  Decreament,
  Divide,
  Increament,
  Product,
  Substract,
} from "../Redux/action";

import styles from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);

  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Counter: {count}</h1>

      <div className={styles.incd}>
        <button className={styles.btn} onClick={() => dispatch(Decreament())}>Decrement</button>
        <button className={styles.btn} onClick={() => dispatch(Increament())}>Increment</button>
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputdiv}>
          <input
          className={styles.input}
            value={input}
            maxLength={3}
            type="number"
            placeholder="****"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className={styles.buttons}>
          <button className={styles.btn} onClick={() => (dispatch(Add(input)), setInput(""))}>
            Add
          </button>

          <button className={styles.btn} onClick={() => (dispatch(Substract(input)), setInput(""))}>
            Substract
          </button>

          <button className={styles.btn} onClick={() => (dispatch(Product(input)), setInput(""))}>
            Multiply
          </button>

          <button className={styles.btn} onClick={() => (dispatch(Divide(input)), setInput(""))}>
            Divide
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
