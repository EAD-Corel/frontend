import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: null,
};

export default function getVideos(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case "@getVideos/GETVIDEOS_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@getVideos/GETVIDEOS_IN_SUCCESS": {
        draft.data = payload.videos;
        draft.error = false;
        draft.loading = false;
        break;
      }

      case "@getVideos/GETVIDEOS_FAILURE": {
        draft.error = true;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
