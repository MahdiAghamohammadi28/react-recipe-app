import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Clock, User, Heartbeat, CheckCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Loading from "../components/Loading/Loading";
import classes from "./Recipe.module.css";

const Recipe = () => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const recipeDetail = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();
      setRecipeDetails(data);
      console.log(data);
      setIsLoading(false);
    };
    recipeDetail(params.name);
  }, [params.name]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.div
      className={classes.container}
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: 2.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className={classes["recipe_info"]}>
        <div className={classes["recipe_info-content"]}>
          <img src={recipeDetails.image} alt={recipeDetails.title} />
          <div className={classes.description}>
            <h2>{recipeDetails.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></p>
          </div>
        </div>

        <div className={classes["recipe_details-items"]}>
          <div className={classes["recipe_time"]}>
            <div className={classes["recipe_icon-wrapper"]}>
              <Clock className={classes["recipe_details-icon"]} />
            </div>
            <span className={classes["recipe_time-text"]}>
              {recipeDetails.readyInMinutes}
            </span>
            <span className={classes["recipe_time-unit"]}>minutes</span>
          </div>
          <div className={classes["recipe_serving"]}>
            <div className={classes["recipe_icon-wrapper"]}>
              <User className={classes["recipe_details-icon"]} />
            </div>
            <span className={classes["recipe_serving-text"]}>
              {recipeDetails.servings}
            </span>
            <span className={classes["recipe_serving-unit"]}>servings</span>
          </div>
          <div className={classes["recipe_healthy"]}>
            <div className={classes["recipe_icon-wrapper"]}>
              <Heartbeat className={classes["recipe_details-icon"]} />
            </div>
            <span className={classes["recipe_healthy-text"]}>
              health Score ={" "}
              <span className={classes["recipe_healthy-unit"]}>
                {recipeDetails.healthScore}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className={classes.instruct}>
        <div className={classes.ingredients}>
          <h2>recipe ingredients</h2>
          <div className={classes["ingredients_container"]}>
            {recipeDetails.extendedIngredients.map((ingredient) => (
              <li>
                <div>
                  <CheckCircle
                    size={20}
                    className={classes["ingredients_icon"]}
                  />
                </div>
                {ingredient.original}
              </li>
            ))}
          </div>
        </div>
        <div className={classes.instructions}>
          <h2>recipe instructions</h2>
          <p
            dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}
          ></p>
        </div>
      </div>
    </motion.div>
  );
};

export default Recipe;
