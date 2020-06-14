import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null,
};

export default function getCourses(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case "@getCourses/GETCOURSES_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@getCourses/GETCOURSES_IN_SUCCESS": {
        draft.data = payload.course;
        draft.error = false;
        draft.loading = false;
        break;
      }

      case "@getCourses/GETCOURSES_FAILURE": {
        draft.error = true;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
