import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect();

// ! Limit

async function run() {
  const restaurants = await Restaurant.find({borough:"Bronx"}).limit(10);
  console.log(restaurants);
}
run();
