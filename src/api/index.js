import axios from "axios";

const MYAPI = axios.create({ baseURL: "http://localhost:5000/" });

MYAPI.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const fetchMyRecipes = () => MYAPI.get(`/cookbook`);
export const saveRecipe = (data) => MYAPI.post(`/cookbook`, data);
export const deleteRecipe = (recipeId) => MYAPI.delete(`/cookbook/${recipeId}`);

export const signin = (formData) => MYAPI.post("/user/signin", formData);
export const signup = (formData) => MYAPI.post("/user/signup", formData);
export const getUserInfo = () => MYAPI.get("/user/info");
