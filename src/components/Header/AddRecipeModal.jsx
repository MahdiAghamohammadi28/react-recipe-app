import React from "react";
import { CloudArrowUp, X } from "@phosphor-icons/react";
import classes from "./AddRecipeModal.module.css";

const AddRecipeModal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.form}>
        <X className={classes["form_close"]} onClick={props.onConfirm} />
        <form className={classes["form_container"]}>
          <div className={classes["form_content"]}>
            <div className={classes["recipe_data"]}>
              <h3>recipe data</h3>
              <div className={classes["recipe_data-input"]}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" required />
              </div>
              <div className={classes["recipe_data-input"]}>
                <label htmlFor="image">Image URL</label>
                <input type="text" id="image" required />
              </div>
              <div className={classes["recipe_data-input"]}>
                <label htmlFor="time">Prep Time</label>
                <input type="number" id="time" required />
              </div>
              <div className={classes["recipe_data-input"]}>
                <label htmlFor="serving">Servings</label>
                <input type="number" id="serving" required />
              </div>
              <div className={classes["recipe_data-input"]}>
                <label htmlFor="publisher">Publisher</label>
                <input type="text" id="publisher" required />
              </div>
            </div>
            <div className={classes["recipe_ingredients"]}>
              <h3>recipe ingredients</h3>
              <div className={classes["recipe_ingredient"]}>
                <label htmlFor="ingredient1">Ingredint 1</label>
                <input
                  type="text"
                  id="ingredient1"
                  placeholder="Format: 'Quantity,Unit,Description'"
                  required
                />
              </div>
              <div className={classes["recipe_ingredient"]}>
                <label htmlFor="ingredient2">Ingredint 2</label>
                <input
                  type="text"
                  id="ingredient2"
                  placeholder="Format: 'Quantity,Unit,Description'"
                  required
                />
              </div>
              <div className={classes["recipe_ingredient"]}>
                <label htmlFor="ingredient3">Ingredint 3</label>
                <input
                  type="text"
                  id="ingredient3"
                  placeholder="Format: 'Quantity,Unit,Description'"
                  required
                />
              </div>
              <div className={classes["recipe_ingredient"]}>
                <label htmlFor="ingredient4">Ingredint 4</label>
                <input
                  type="text"
                  id="ingredient4"
                  placeholder="Format: 'Quantity,Unit,Description'"
                  required
                />
              </div>
              <div className={classes["recipe_ingredient"]}>
                <label htmlFor="ingredient5">Ingredint 5</label>
                <input
                  type="text"
                  id="ingredient5"
                  placeholder="Format: 'Quantity,Unit,Description'"
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className={classes.btn}>
            <CloudArrowUp className={classes["btn_icon"]} weight="bold" />
            <span>upload recipe</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeModal;
