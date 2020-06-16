import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null,
};

export default function getWarnings(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case "@getWarnings/GETWARNINGS_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@getWarnings/GETWARNINGS_IN_SUCCESS": {
        draft.data = payload.warnings;
        draft.error = false;
        draft.loading = false;
        break;
      }

      case "@getWarnings/GETWARNINGS_FAILURE": {
        draft.error = true;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
