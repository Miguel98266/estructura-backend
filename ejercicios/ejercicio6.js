import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect();

// ! Where equal an greater than and not equal

async function run() {
  const restaurants = await Restaurant.find({"cuisine":{$ne:"American "},"grades.score":{$gt: 70}})
  console.log(restaurants);
}
run();
