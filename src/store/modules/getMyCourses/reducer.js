import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null,
};

export default function getMyCourses(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case "@getMyCourses/GETMYCOURSES_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@getMyCourses/GETMYCOURSES_IN_SUCCESS": {
        draft.data = payload.courses;
        draft.error = false;
        draft.loading = false;
        break;
      }

      case "@getMyCourses/GETMYCOURSES_FAILURE": {
        draft.error = true;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
