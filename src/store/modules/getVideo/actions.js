export function getVideosInRequest(token, id) {
  return {
    type: "@getVideos/GETVIDEOS_IN_REQUEST",
    payload: { token, id },
  };
}

export function getVideosInSuccess(token, videos) {
  return {
    type: "@getVideos/GETVIDEOS_IN_SUCCESS",
    payload: { token, videos },
  };
}

export function getVideosFailure() {
  return {
    type: "@getVideos/GETVIDEOS_FAILURE",
  };
}
