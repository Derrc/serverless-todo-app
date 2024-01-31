import ax from "axios";
import {
  GetTodosResponse,
  PostTodosRequestPayload,
  TodosResponse,
  Todo,
} from "./types";

const axios = ax.create();
axios.defaults.baseURL = import.meta.env.VITE_API_GATEWAY_BASE_URL;

export const getTodos = async () => {
  try {
    const response = await axios.get("/todos");
    return (response.data as GetTodosResponse).Items;
  } catch (error) {
    console.log("Error fetching todos:", error);
  }
};

export const addTodo = async (content: string) => {
  const payload: PostTodosRequestPayload = { content: content };
  try {
    const response = await axios.post("/addTodo", payload);
    console.log("Added Todo:", (response.data as TodosResponse).$metadata);
  } catch (error) {
    console.log("Error adding todo:", error);
  }
};

export const updateTodo = async (payload: Todo) => {
  try {
    const response = await axios.put("/updateTodo", payload);
    console.log("Updated Todo:", (response.data as TodosResponse).$metadata);
  } catch (error) {
    console.log("Error while updating todo:", error);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const response = await axios.delete(`/deleteTodo/${id}`);
    console.log("Deleted Todo:", (response.data as TodosResponse).$metadata);
  } catch (error) {
    console.log("Error while deleting todo:", error);
  }
};
