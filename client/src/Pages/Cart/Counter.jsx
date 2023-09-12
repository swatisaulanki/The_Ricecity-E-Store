import React from "react";
import styles from "./counter.module.css";
import { GrFormAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
const Counter = () => {
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className={styles.ProductContainer}>
        <div className={styles.ProductContainerTwo}>
          <div className={styles.Yourcart}>Your Cart</div>
          <div>Continue to Shipping</div>
        </div>
        <hr style={{ width: "70%" }}></hr>
        <div className={styles.counterContainer}>
          <div className={styles.Productimg}>
            <p>Product</p>
          </div>
          <div>
            <p>QUANTITY</p>
          </div>
          <div>
            <p>TOTAL</p>
          </div>
        </div>
        <div className={styles.TotalContainer}>
          <div className={styles.imageContainer}>
            <img src="https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101105-1_1_300x.jpg?v=1659449763" />
          </div>
          <div className={styles.CounterF}>
            <div className={styles.minus}>
              <button onClick={decCount}>
                <GrFormSubtract style={{ fontSize: "20px" }} />
              </button>
            </div>
            <div className={styles.CountSec}>
              <h1>{count}</h1>
            </div>
            <div className={styles.plus}>
              <button onClick={incCount}>
                <GrFormAdd style={{ fontSize: "20px" }} />
              </button>
            </div>
            <div className={styles.Delete}>
              <RiDeleteBin6Line
                styles={{ fontSize: "35px", marginTop: "20%" }}
              />
            </div>
          </div>
          <div>$180</div>
        </div>
      </div>
    </>
  );
};

export default Counter;
