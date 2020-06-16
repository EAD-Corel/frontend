import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null,
};

export default function getClass(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case "@getClass/GETCLASS_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@getClass/GETCLASS_IN_SUCCESS": {
        draft.data = payload.lession;
        draft.error = false;
        draft.loading = false;
        break;
      }

      case "@getClass/GETCLASS_FAILURE": {
        draft.error = true;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
