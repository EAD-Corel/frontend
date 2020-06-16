import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { getModulesInSuccess, getModulesFailure } from "./actions";

function* getModules({ payload }) {
  const { token, id } = payload;

  try {
    const response = yield call(api.get, `/modules/${id}/course`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const modules = response.data;

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    yield put(getModulesInSuccess(response.data.token, modules));
  } catch (error) {
    yield put(getModulesFailure());
  }
}

export default all([
  takeLatest("@getModules/GETMODULES_IN_REQUEST", getModules),
]);
