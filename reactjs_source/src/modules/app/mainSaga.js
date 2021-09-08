import { all } from "redux-saga/effects";
import loginSaga from "../Login/saga";
import registerSaga from "../Register/saga";
import bookSaga from "../Book/saga";
import MapSaga from "../WorldMap/saga";

export function* mainSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    bookSaga(),
    MapSaga()
  ]);
}