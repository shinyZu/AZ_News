import axios from "../axios";
import qs from "qs";

class NewsService {
  getAll = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get("news")
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  publish = async (data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post("news", data)
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };
}

export default new NewsService();
