import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { getVideosInSuccess, getVideosFailure } from "./actions";

function* getVideos({ payload }) {
  const { token, id } = payload;

  try {
    const response = yield call(api.get, `/videos/${id}/renders`);

    const videos = response.data;

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    yield put(getVideosInSuccess(response.data.token, videos));
  } catch (error) {
    yield put(getVideosFailure());
  }
}

export default all([takeLatest("@getVideos/GETVIDEOS_IN_REQUEST", getVideos)]);
