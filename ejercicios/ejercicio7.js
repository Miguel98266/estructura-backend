import connect from "./database.js";
import Restaurant from "../api/models/Restaurant.js";

connect();

// ! or and in

async function run() {
  // const restaurants = await Restaurant.find({borough:{$in:["Bronxor Brooklyn","Staten Island"]}},"name borough")
  const restaurants = await Restaurant.find({$or: [{borough:"Bronxor Brooklyn"},{borough:"Staten Island"}]},"name borough")
  console.log(restaurants);
}
run();
