const jsonUrl = `/restaurants.json`;

export async function fetchPrices() {
  const res = await fetch(jsonUrl);
  const res_1 = await res.json();
  return res_1.price;
}

export function findRestaurantByPriceRange(restaurant, priceRange) {
  return restaurant.filter((rest) => {
    return (
      rest.averageMealPrice >= priceRange.minPerPerson &&
      rest.averageMealPrice <= priceRange.maxPerPerson
    );
  });
}
