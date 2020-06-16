import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { getWarningsInSuccess, getWarningsFailure } from "./actions";

function* getWarnings({ payload }) {
  const { token, id } = payload;

  try {
    const response = yield call(api.get, `/warnings/${id}/course`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const warnings = response.data;

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    yield put(getWarningsInSuccess(response.data.token, warnings));
  } catch (error) {
    yield put(getWarningsFailure());
  }
}

export default all([
  takeLatest("@getWarnings/GETWARNINGS_IN_REQUEST", getWarnings),
]);
