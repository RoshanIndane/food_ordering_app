import Image from "next/image"
import React from "react"
import styles from "../styles/Navbar.module.css"


const Navbar = () => {
  return (
    <div className={styles.container}>
      

      nav
      <div className={styles.item}>
      <div className={styles.telephone}>
        <Image src="/img/telephone.jpg" alt="telephone" width="32px" height="32px"/>
      </div>
      <div className={styles.texts}>
      <div className={styles.text}>ORDER NOW!</div>
      <div className={styles.text}>1800 912 320   </div>

      </div>


      </div>


      <div className={styles.item}></div>
      <div className={styles.item}></div>



      
      
      
      </div>
  )
}

export default Navbar