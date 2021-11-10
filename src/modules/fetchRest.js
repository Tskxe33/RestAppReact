export function fetchRestaurants() {
  const restaurantsURL = "/restaurants.json";
  return fetch(restaurantsURL).then((res) => res.json());
}
