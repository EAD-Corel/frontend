export function getCourseInRequest(token, id) {
  return {
    type: "@getCourse/GETCOURSE_IN_REQUEST",
    payload: { token, id },
  };
}

export function getCourseInSuccess(token, course) {
  return {
    type: "@getCourse/GETCOURSE_IN_SUCCESS",
    payload: { token, course },
  };
}

export function getCourseFailure() {
  return {
    type: "@getCourse/GETCOURSE_FAILURE",
  };
}
