import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect();

//! Projection as String
// https://stackoverflow.com/questions/25330555/mongoose-find-return-specific-properties
async function run() {
  const restaurants = await Restaurant.find({},'_id name cuisine borough restaurant_id');
  console.log(restaurants);
}
run();
