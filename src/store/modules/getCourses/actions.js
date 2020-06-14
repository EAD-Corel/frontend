export function getCoursesInRequest(token) {
  return {
    type: "@getCourses/GETCOURSES_IN_REQUEST",
    payload: { token },
  };
}

export function getCoursesInSuccess(token, courses) {
  return {
    type: "@getCourses/GETCOURSES_IN_SUCCESS",
    payload: { token, courses },
  };
}

export function getCoursesFailure() {
  return {
    type: "@getCourses/GETCOURSES_FAILURE",
  };
}
