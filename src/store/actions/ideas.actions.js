import { stringify } from 'qs';
import { API_CONTROLLERS } from 'common/consts';

export const REDUCER_ACTION_TYPE_PATTERN = 'PATTERN_IDEAS';
export const EVENTS_IDEAS = {
  PATTERN_IDEAS: 'PATTERN_IDEAS',
  IDEAS_SET_ITEM: 'IDEAS_SET_ITEM',
  IDEAS_CLEAR_LIST_STATE: 'IDEAS_CLEAR_LIST_STATE',
  IDEAS_CLEAR_ITEM_STATE: 'IDEAS_CLEAR_ITEM_STATE',
};


// Only requests with last lastGetListOperationId can change 'list' state of this store
let lastGetListOperationId = '';
export function changeIdeaOperationId(operationId, type) {
  switch (type) {
    case 'list':
      lastGetListOperationId = operationId;
      break;
    default:
      throw new Error('Error in changeIdeaOperationId (/src/store/actions/ideas.actions.js). Unknown type!');
  }

}

export function getIdeas({
  page = 1,
  pageSize = 25,
  operationId,
} = {}) {
  const queries = { page: page, pageSize };
  const queriesString = stringify(queries, { addQueryPrefix: true });
  const url = `${API_CONTROLLERS.IDEAS}${queriesString}`;
  lastGetListOperationId = operationId;

  return (dispatch, getState, apiRequest) => {
    const success = ({ items, pagination }) => {
      const { ideasState = {} } = getState();
      const { list = {} } = ideasState;
      const { ideas: currentIdeas = [] } = list;

      const newList = lastGetListOperationId === operationId ? {
        ideas: page === 1 ? [...items] : [...currentIdeas, ...items],
        pagination,
      } : { ...list };

      return dispatch({
        type: EVENTS_IDEAS.PATTERN_IDEAS,
        payload: {
          ...ideasState,
          list: newList,
        },
      });
    };

    return apiRequest({
      url,
      method: 'get',
      success,
    });
  };
}

export function getIdeaById(ideaId) {
  const url = `${API_CONTROLLERS.IDEAS}/${ideaId}`;

  return (dispatch, getState, apiRequest) => {
    const success = ({ data }) => {
      const { ideasState = {} } = getState();

      return dispatch({
        type: EVENTS_IDEAS.PATTERN_IDEAS,
        payload: {
          ...ideasState,
          item: {
            ...data,
          },
        },
      });
    };

    return apiRequest({
      url,
      method: 'get',
      success,
    });
  };
}

export function setIdeaItem(idea) {
  return ({
    type: EVENTS_IDEAS.IDEAS_SET_ITEM,
    payload: idea,
  });
}

export function clearIdeasList() {
  return ({
    type: EVENTS_IDEAS.IDEAS_CLEAR_LIST_STATE,
  });
}

export function clearIdeasItem() {
  return ({
    type: EVENTS_IDEAS.IDEAS_CLEAR_ITEM_STATE,
  });
}
