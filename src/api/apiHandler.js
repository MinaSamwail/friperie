import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

function errorHandler(error) {
  if (error.response) {
    console.log(error.response.data.message);
    throw error.response.data;
  }
  throw error;
}

export default {
  service,
  transferArticle(total) {
    return service
      .post(`/api/vetement/article`, total)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getArticle() {
    return service
      .get(`/api/vetement`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteArticle(id) {
    return service
      .delete(`/api/vetement/${id}`, { articles: id })
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
