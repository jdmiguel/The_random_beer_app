import { API_PIXABAY } from "../utils/constants";
import { request } from ".";

export const getImages = (page = 1) =>
  request(API_PIXABAY, {
    method: "GET",
    params: {
      key: "6473511-0417f2cad683f1bee54cafe15",
      q: "ireland",
      image_type: "photo",
      page,
      per_page: 12
    }
  });
