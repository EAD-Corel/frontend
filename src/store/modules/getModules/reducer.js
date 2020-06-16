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
      case "@getModules/GETMODULES_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@getModules/GETMODULES_IN_SUCCESS": {
        draft.data = payload.modules;
        draft.error = false;
        draft.loading = false;
        break;
      }

      case "@getModules/GETMODULES_FAILURE": {
        draft.error = true;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
