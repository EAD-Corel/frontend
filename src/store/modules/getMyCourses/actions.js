export function getMyCoursesInRequest(token, id) {
  return {
    type: "@getMyCourses/GETMYCOURSES_IN_REQUEST",
    payload: { token, id },
  };
}

export function getMyCoursesInSuccess(token, courses) {
  return {
    type: "@getMyCourses/GETMYCOURSES_IN_SUCCESS",
    payload: { token, courses },
  };
}

export function getMyCoursesFailure() {
  return {
    type: "@getMyCourses/GETMYCOURSES_FAILURE",
  };
}
