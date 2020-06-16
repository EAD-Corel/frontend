export function getModulesInRequest(token, id) {
  return {
    type: "@getModules/GETMODULES_IN_REQUEST",
    payload: { token, id },
  };
}

export function getModulesInSuccess(token, modules) {
  return {
    type: "@getModules/GETMODULES_IN_SUCCESS",
    payload: { token, modules },
  };
}

export function getModulesFailure() {
  return {
    type: "@getModules/GETMODULES_FAILURE",
  };
}
