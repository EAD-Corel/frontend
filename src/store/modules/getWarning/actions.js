export function getWarningsInRequest(token, id) {
  return {
    type: "@getWarnings/GETWARNINGS_IN_REQUEST",
    payload: { token, id },
  };
}

export function getWarningsInSuccess(token, warnings) {
  return {
    type: "@getWarnings/GETWARNINGS_IN_SUCCESS",
    payload: { token, warnings },
  };
}

export function getWarningsFailure() {
  return {
    type: "@getWarnings/GETWARNINGS_FAILURE",
  };
}
