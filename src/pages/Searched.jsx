import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import classes from "./Searched.module.css";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const getSearched = async (name) => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );
      const recipes = await api.json();
      setSearchedRecipes(recipes.results);
      setIsLoading(false);
      console.log(recipes);
    };
    getSearched(params.search);
  }, [params.search]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.cards}>
      {searchedRecipes.map((recipe) => {
        return (
          <Link to={"/recipe/" + recipe.id}>
            <div className={classes.card} key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4 className={classes["card_title"]}>{recipe.title}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Searched;
