import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null,
};

export default function getUsers(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case "@getUsers/GETUSERS_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@getUsers/GETUSERS_IN_SUCCESS": {
        draft.data = payload.users;
        draft.error = false;
        draft.loading = false;
        break;
      }

      case "@getUsers/GETUSERS_FAILURE": {
        draft.error = true;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
