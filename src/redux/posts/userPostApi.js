import axios from "axios";

export const userPostApi = async (postData) => {
  const response = await axios.post(
    "http://localhost:5000/user/new-post",
    postData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  const data = response.data;
  return data;
};