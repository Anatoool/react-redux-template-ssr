/* eslint-disable */

export function changeStateByPattern({ state, action, patternActionType }) {
  let stateChanged = false;

  if (patternActionType === action.type) {
    if (
      action.payload &&
      !action.payload.error &&
      Object.keys(action.payload).length
    ) {
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key];
      });
      stateChanged = true;
    }
  }

  return stateChanged;
}
