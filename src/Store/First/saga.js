import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "../../utils/axios";
import {
  getFirstDataFailed,
  getFirstDataSuccess,
} from "./action";
import { GET_FIRST_DATA_REQUEST } from "./actiontypes";

function* getFirstPageContent() {
  try {
    const response = yield call(get, `/posts`);
    console.log(response,'response');
    yield put(getFirstDataSuccess(response));
  } catch (error) {
    yield put(getFirstDataFailed(error));
  }
}

function* contentSaga() {
  yield takeLatest(GET_FIRST_DATA_REQUEST, getFirstPageContent);
}

export default contentSaga;