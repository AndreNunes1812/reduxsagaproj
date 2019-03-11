import { call, put } from "redux-saga/effects";
import { loadDataSuccess } from "./../actions";

function* getIP(axios) {
  console.log("Sagas: GETIP");
  const dados = yield call(axios.get("http://httpbin.org/ip"));
  yield put(loadDataSuccess(dados.data.origin));
}

export default getIP;
