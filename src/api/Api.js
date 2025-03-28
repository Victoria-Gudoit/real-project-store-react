import { request } from "./request";

const HOST_CATEGORIES = 'http://localhost:3000/category'

export const getPopularCategories = () => {
    return request(HOST_CATEGORIES);
  };