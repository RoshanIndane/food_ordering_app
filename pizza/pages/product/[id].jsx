import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Product.module.css";

const Product = ({pizza}) => {
  const [size, setSize] = useState(0);

  const handleChange=(e,option)=>{
    console.log(e, option  )
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            objectFit="contain"
            layout="fill"
            alt="pizza img"
          />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>₹{pizza.prices[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/outlinepizza.jpg" layout="fill" alt="img" />
            <span className={styles.number}>Small</span>
          </div>

          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/outlinepizza.jpg" layout="fill" alt="img" />
            <span className={styles.number}>Medium</span>
          </div>

          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/outlinepizza.jpg" layout="fill" alt="img" />
            <span className={styles.number}>Large</span>
          </div>
        </div>

        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {
            pizza.extraOption.map((option)=>(
              <div className={styles.option} key={option._id} >
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={
                  (e)=>{
handleChange(e,option)
                  }
                }
              />
              <label htmlFor="double">{option.text}</label>
            </div>
  
            ))
          }
         
          
        </div>

        <div className={styles.add} >
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};


export const getServerSideProps= async ({params})=>{
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return{
    props:{
      pizza:res.data,
    },
  }
}


export default Product;
