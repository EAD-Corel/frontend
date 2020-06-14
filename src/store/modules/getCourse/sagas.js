import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { getCourseInSuccess, getCourseFailure } from "./actions";

function* getCourse({ payload }) {
  const { token, id } = payload;

  try {
    const response = yield call(api.get, `/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("response ->", response);

    const course = response.data;

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    yield put(getCourseInSuccess(response.data.token, course));
  } catch (error) {
    yield put(getCourseFailure());
  }
}

export default all([takeLatest("@getCourse/GETCOURSE_IN_REQUEST", getCourse)]);
