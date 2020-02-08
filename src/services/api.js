import { API_BEER } from "../utils/constants";
import { request } from ".";

export const getRandomBeer = () =>
  request(`${API_BEER}random/`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    params: {
      key: "a5c1b917e7ba62dcd79f434ed73bc72d",
      hasLabels: "Y",
      withBreweries: "Y"
    }
  });
