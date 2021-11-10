export async function fetchSizes() {
  const sizesUrl = "/restaurants.json";

  const res = await fetch(sizesUrl);
  const res_1 = await res.json();
  return res_1.size;
}

export function findRestaurantBySize(restaurant, restaurantSize) {
  return restaurant.filter((rest) => {
    return (
      rest.numOfTables >= restaurantSize.minNumTables &&
      rest.numOfTables <= restaurantSize.maxNumTables
    );
  });
}
