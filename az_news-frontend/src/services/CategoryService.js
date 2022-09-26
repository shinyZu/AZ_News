import axios from "../axios";
import qs from "qs";

class CategoryService {
  getAll = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get("category")
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  searchById = async (id) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get("category/" + id)
        .then((res) => {
          return resolve(res);
        })
        .catch((er) => {
          return resolve(er);
        });
    });
    return await promise;
  };

  saveEditor = async (data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post("category", data)
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

export default new CategoryService();
