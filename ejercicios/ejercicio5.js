import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect();

// ! Where equal an greater than

async function run() {
  const restaurants = await Restaurant.find({"grades.score":{$gte: 90}});
  console.log(restaurants);
}
run();
