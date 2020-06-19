import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { getUsersInSuccess, getUsersFailure } from "./actions";

function* getUsers({ payload }) {
  const { token } = payload;

  try {
    const response = yield call(api.get, `/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const users = response.data;

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    yield put(getUsersInSuccess(response.data.token, users));
  } catch (error) {
    yield put(getUsersFailure());
  }
}

export default all([takeLatest("@getUsers/GETUSERS_IN_REQUEST", getUsers)]);
