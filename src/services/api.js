import { request } from ".";

/** Constants */
import { API_BEER } from "../utils/constants";

export const getRandomBeer = () =>
  request(`${API_BEER}random/`, {
    method: "GET",
    params: {
      key: "a5c1b917e7ba62dcd79f434ed73bc72d",
      hasLabels: "Y",
      withBreweries: "Y"
    }
  });

export const getBeer = id =>
  request(`${API_BEER}${id}/`, {
    method: "GET",
    params: {
      key: "a5c1b917e7ba62dcd79f434ed73bc72d",
      hasLabels: "Y",
      withBreweries: "Y"
    }
  });
