import axios from "./axios";

export function getData(URL:string) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(URL);
        resolve(response);
      } catch (e) {
        console.log("get error: ", e);
        reject(e);
      }
    });
  }
 