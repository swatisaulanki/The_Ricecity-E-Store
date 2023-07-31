import React from 'react'
import styles from "./Navbar.module.css";
import  ricecityIcon from "../Components/ricecitylogo.png";
import "./Search.css"
const Navbar = () => {
  return (
    <>
      <div className={styles.maincontainer}>
         <div className={styles.icondiv}>
            <img src={ricecityIcon}/>
            <div>
            <h2>Ricecity E-Store</h2>
         </div>
         </div>
        

         {/* <div className={styles.inputsearchdiv}>
            <input type="text" placeholder='Search...'/>
         </div> */}



         <div className="search">
      <form>
        <input
        
          type="text"
          placeholder="Search for products..."
        />

        <button type="submit">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            color="white"
            font-size="30px"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "white" }}
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </button>
     
      </form>
      
    </div>
         <div className="maindivcart">
         <button className="cart">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              font-size="25px"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
          <div className={styles.selectlangdiv}>
            <select>
                <option>Select Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>

            </select>
         </div>
         <div>
            <div>1</div>
            <div>2</div>
         </div>
         </div>
       
<div className={styles.btndownloaddiv}>
    <button>Download</button>
</div>

         


        
      </div>
    </>
  )
}

export default Navbar
