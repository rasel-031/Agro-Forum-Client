import axios from "axios";

export const userStoriesApi = async () => {
  const response = await axios.get("http://localhost:5000/user/my-post");
  const data = response.data;
  return data;
};