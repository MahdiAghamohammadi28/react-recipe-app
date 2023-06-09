import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import classes from "./Search.module.css";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };
  return (
    <div className={classes.container}>
      <motion.div
        className={classes.title}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <h2>recipe search</h2>
        <p>Search recipes from all over the world.</p>
      </motion.div>

      <motion.form
        className={classes.form}
        onSubmit={submitHandler}
        initial={{ translateY: -90, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
      >
        <input
          type="text"
          value={input}
          placeholder="Enter a recipe"
          className={classes["search_input"]}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MagnifyingGlass weight="bold" className={classes["search_icon"]} />
      </motion.form>
    </div>
  );
};

export default Search;
