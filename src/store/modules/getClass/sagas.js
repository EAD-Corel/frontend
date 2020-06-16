import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { getClassInSuccess, getClassFailure } from "./actions";

function* getClass({ payload }) {
  const { token, id } = payload;

  try {
    const response = yield call(api.get, `/classes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("response ->", response);

    const lession = response.data;

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    yield put(getClassInSuccess(response.data.token, lession));
  } catch (error) {
    yield put(getClassFailure());
  }
}

export default all([takeLatest("@getClass/GETCLASS_IN_REQUEST", getClass)]);
