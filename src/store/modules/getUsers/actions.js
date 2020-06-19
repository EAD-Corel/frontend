export function getUsersInRequest(token) {
  return {
    type: "@getUsers/GETUSERS_IN_REQUEST",
    payload: { token },
  };
}

export function getUsersInSuccess(token, users) {
  return {
    type: "@getUsers/GETUSERS_IN_SUCCESS",
    payload: { token, users },
  };
}

export function getUsersFailure() {
  return {
    type: "@getUsers/GETUSERS_FAILURE",
  };
}
