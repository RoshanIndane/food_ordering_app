import React from 'react'
import styles from '../styles/Productlist.module.css'
import PizzaCard from './PizzaCard'

const Productlist = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE PIZZA DELIVERY APP</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur eaque nulla in ex! Laboriosam illo, accusantium recusandae excepturi harum tenetur itaque, in quam non, nesciunt quo. Aut, inventore! Earum.</p>

<div className={styles.wrapper}>
    <PizzaCard/>
    <PizzaCard/>
    <PizzaCard/>
    <PizzaCard/>
    <PizzaCard/>
    <PizzaCard/>
    <PizzaCard/>

</div>

    </div>
  )
}

export default Productlist