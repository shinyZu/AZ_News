import axios from "../axios";
import qs from "qs";

class EditorService {
  getAll = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get("editor")
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
        .get("editor/" + id)
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
        .post("editor", data)
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

export default new EditorService();
