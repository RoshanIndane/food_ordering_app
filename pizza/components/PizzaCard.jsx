import Image from 'next/image'
import React from 'react'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/img/pizza.png' alt='' width='500' height='450'/>
      <h1 className={styles.title}>FARMHOUSE PIZZA</h1>
      <span className={styles.price}>Rs 339</span>
<p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aperiam nam voluptate ipsam rem necessitatibus nulla ratione facilis, corporis, earum, velit eaque veritatis. Quaerat accusamus a ad cupiditate? Similique, debitis.</p>
    </div>
  )
}

export default PizzaCard
