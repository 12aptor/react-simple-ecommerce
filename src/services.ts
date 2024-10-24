import { API_URL } from "./lib/constants";
import { ILogin, IProduct } from "./types";

export const getProductsForClientsService = async () => {
  try {
    const response = await fetch(API_URL + "/products/list/active");

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
    const response = await fetch(API_URL + "/products/list", {
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

export const postProductService = async (data: IProduct) => {
  const formData = new FormData();

  for (const key in data) {
    formData.append(key, data[key as keyof IProduct] as string | File);
  }

  const response = await fetch(API_URL + "/products/create", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: formData,
  });

  const json = await response.json();
  const status = response.status;

  return { json, status };
};

export const getAllCategoriesService = async () => {
  try {
    const response = await fetch(API_URL + "/categories/list", {
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
  const response = await fetch(API_URL + "/auth/login", {
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
