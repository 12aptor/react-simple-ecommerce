import { API_URL } from "./lib/constants";
import { ILogin } from "./types";

export const getProductsForClientsService = async () => {
  try {
    const response = await fetch(API_URL + "/product/get_all_for_clients");

    if (!response.ok) {
      return null;
    }

    const json = await response.json();

    return json;
  } catch (error) {
    return null;
  }
};

export const getAllProductsService = async () => {
  try {
    const response = await fetch(API_URL + "/product/get_all", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (!response.ok) {
      return null;
    }

    const json = await response.json();

    return json;
  } catch (error) {
    return null;
  }
};

export const loginService = async (data: ILogin) => {
  const response = await fetch(API_URL + "/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  const status = response.status;

  return { json, status };
};
