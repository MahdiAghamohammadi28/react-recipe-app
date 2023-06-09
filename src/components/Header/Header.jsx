import React, { useState } from "react";
import logo from "../../assets/Logo-gradient.png";
import { NotePencil } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AddRecipeModal from "./AddRecipeModal";
import classes from "./Header.module.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <motion.header
      className={classes.header}
      initial={{ translateY: -90, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Link to="/">
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
          <h2>master chef</h2>
        </div>
      </Link>
      <ul className={classes.items}>
        <li onClick={showModalHandler}>
          <NotePencil className={classes["add_recipe-icon"]} />
          <span>add recipes</span>
        </li>
        {showModal && <AddRecipeModal onConfirm={closeModalHandler} />}
      </ul>
    </motion.header>
  );
};

export default Header;
