export function getClassInRequest(token, id) {
  return {
    type: "@getClass/GETCLASS_IN_REQUEST",
    payload: { token, id },
  };
}

export function getClassInSuccess(token, lession) {
  return {
    type: "@getClass/GETCLASS_IN_SUCCESS",
    payload: { token, lession },
  };
}

export function getClassFailure() {
  return {
    type: "@getClass/GETCLASS_FAILURE",
  };
}
