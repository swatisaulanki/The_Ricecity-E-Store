import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Cartpage.module.css";
const Cartpage = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const { id } = useParams();

  console.log(data);
  const GetData = () => {
    axios.get("http://localhost:3000/CartsDatas").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };
  useEffect(() => {
    GetData();
  }, []);

  const handleDelete = () => {
    console.log(data.id);
    alert("data");
    axios
      .delete(`http://localhost:3000/CartsDatas{id}`)
      .then(() => {
        alert("data deleted succesfully");
        GetData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div style={{display:"grid" ,gridTemplateColumns: "repeat(4,1fr)", gap:"20px"}}>
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div className={styles.Cartcontainstwo}>
              <div className={styles.imgcont}>
                <img src={item.imageURL2} />

                <h1>{item.title}</h1>
              </div>

              <div className={styles.Cartname}>
                <p>{item.name}</p>

                <p>{item.price}</p>
              </div>

              <div className={styles.btncart}>
                <button> Add to Cart </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cartpage;
