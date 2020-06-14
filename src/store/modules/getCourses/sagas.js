import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { getCoursesInSuccess, getCoursesFailure } from "./actions";

function* getCourses({ payload }) {
  const { token } = payload;

  try {
    const response = yield call(api.get, `/enrollments`);

    const courses = response.data;

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    yield put(getCoursesInSuccess(response.data.token, courses));
  } catch (error) {
    yield put(getCoursesFailure());
  }
}

export default all([
  takeLatest("@getCourses/GETCOURSES_IN_REQUEST", getCourses),
]);
