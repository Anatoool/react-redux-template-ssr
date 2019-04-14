import { changeStateByPattern } from 'helpers/changeStateByPattern';
import { EVENTS_IDEAS, REDUCER_ACTION_TYPE_PATTERN } from 'store/actions/ideas.actions';

export const initState = {};

export default (stateCopy = initState, action) => {
  let state = { ...stateCopy };

  const stateChanged = changeStateByPattern({
    state,
    action,
    patternActionType: REDUCER_ACTION_TYPE_PATTERN,
  });

  switch (action.type) {
    case EVENTS_IDEAS.IDEAS_SET_ITEM:
      state = {
        ...stateCopy,
        item: action.payload,
      };
      return state;
    case EVENTS_IDEAS.IDEAS_CLEAR_LIST_STATE:
      state = {
        ...stateCopy,
        list: {},
      };
      return state;
    default:
      return stateChanged ? state : stateCopy;
  }
};
