import { call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";

const getApiProduct = async () => {
  let res = await fetch("https://api.npoint.io/beef3d4f5c122e5a014a");
  let data = await res.json();
  return data;
};

function* getData() {
  let data = yield call(getApiProduct);
  //lấy được cục data
  yield put({
    type: "GET_DATA",
    payload: data,
  });
  //giống như dispatch
}

function* mysaga() {
  yield takeLatest("GET_PRODUCT", getData);
}
export default mysaga;
