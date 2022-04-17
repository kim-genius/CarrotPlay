import store from "../../redux/store";
import actions from "../../redux/actions";
import * as api from "../apis/movie";
import { fetchURL } from "../apis/utils/requests";

export const queryMovies = (URL: string) => {
  return new Promise(async (resolve: any, reject) => {
    try {
      const res = await api.getData(URL);

      resolve(res);
    } catch (error) {
      console.log("queryMovies error: ", error);
      reject(error);
    }
  });
};

export const queryAllMovies = () => {
  return new Promise(async (resolve: any, reject) => {
    try {
      const keys = Object.keys(fetchURL);
      const requests = [];

      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        requests.push(api.getData(fetchURL[k]));
      }

      const dataObj: any = {};
      const allRes = await Promise.all(requests);

      allRes.forEach((res: any, index) => {
        const k: any = keys[index];
        dataObj[k] = res.data.results;
      });
      store.dispatch(actions.setMovie(dataObj));

      resolve(undefined);
    } catch (error) {
      console.log("queryAllMovies error: ", error);
      reject(error);
    }
  });
};
