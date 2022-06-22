import React from 'react'

import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            PIZZA ? AWWWW, ROJH KHAAT JAAA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> Kothrud, 411012
            <br /> 8421163964
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> Balewadi, 420022
            <br /> 8421163964
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> Wakad, 411057
            <br /> 8421163964
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> Akurdi, 412047
            <br /> 8421163964
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;