import axios from "axios";

const MYAPI = axios.create({ baseURL: "http://localhost:5000/" });

MYAPI.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchMyRecipes = () => MYAPI.get(`/cookbook`);

export const saveRecipe = (data) => {
  MYAPI.post(`/cookbook`, data);
};

export const deleteRecipe = (recipeId) =>
  MYAPI.delete(`/cookbook/${recipeId}`);

export const signin = (formData) => MYAPI.post("/user/signin", formData);
export const signup = (formData) => MYAPI.post("/user/signup", formData);
