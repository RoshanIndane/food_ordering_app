import Image from 'next/image'
import React from 'react'
import styles from "../../styles/Order.module.css"

const Order = () => {

    const status=0;

    const statusClass=(index)=>{
        if(index - status < 1) return styles.done;
        if(index - status === 1) return styles.inProgress;
        if(index - status > 1) return styles.undone;

    }


  return (
    <div className={styles.container}>
    <div className={styles.left}>
        <div className={styles.row}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>

          <tr>
            <td>
              <span className={styles.id}>1258963478</span>
            </td>

            <td>
              <span className={styles.name}>
                Roshan Indane
              </span>
            </td>

            <td>
              <span className={styles.address}>vaastu viva wakad</span>
            </td>

            <td>
              <span className={styles.total}> Rs400</span>
            </td>
          </tr>
        </table>
        </div>

        <div className={styles.row}>
            <div className={statusClass(0)}>
                <Image src="/img/payment.jpg" width={30} height={30} alt="img"/>
                <span>Payment</span>
                <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="img" />
                </div>
            </div>

            <div className={statusClass(1)}>
                <Image src="/img/cooking.webp" width={30} height={30} alt="img"/>
                <span>Preparing</span>
                <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="img" />
                </div>
            </div>

            <div className={statusClass(2)}>
                <Image src="/img/bike.png" width={30} height={30} alt="img"/>
                <span>On the way</span>
                <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="img" />
                </div>
            </div>

            <div className={statusClass(3)}>
                <Image src="/img/delivered.jpg" width={30} height={30} alt="img"/>
                <span>Delivered</span>
                <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="img" />
                </div>
            </div>
        </div>

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
            <button disabled className={styles.button}>PAID!</button>
        </div>
    </div>



      
    </div>
  )
}

export default Order
