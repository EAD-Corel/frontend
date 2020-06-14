import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { getMyCoursesInSuccess, getMyCoursesFailure } from "./actions";

function* getMyCourses({ payload }) {
  const { token, id } = payload;

  try {
    const response = yield call(api.get, `/enrollments/${id}/myCourses`);

    const courses = response.data;

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    yield put(getMyCoursesInSuccess(response.data.token, courses));
  } catch (error) {
    yield put(getMyCoursesFailure());
  }
}

export default all([
  takeLatest("@getMyCourses/GETMYCOURSES_IN_REQUEST", getMyCourses),
]);
