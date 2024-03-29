import Image from "next/image";
import React from "react";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt="img"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>FARMHOUSE PIZZA</span>
            </td>

            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>

            <td>
              <span className={styles.price}>RS200</span>
            </td>

            <td>
              <span className={styles.quantity}>2</span>
            </td>

            <td>
              <span className={styles.total}> Rs400</span>
            </td>
          </tr>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>RS 500
            </div>

            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>RS 0
            </div>

            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>RS 500
            </div>
            <button className={styles.button}>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
