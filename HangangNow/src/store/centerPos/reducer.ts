import { CenterPosActionType } from './actions';
import { UPDATE_CENTER_POS_ACTION_TYPES } from './modules/actionTypes';

export type CenterPosState = {
  centerPos: {
    lat: number;
    lng: number;
  } | null;
};

const init: CenterPosState = {
  centerPos: null,
};

const cetnerPosReducer = (
  prev: CenterPosState = init,
  { type, payload }: CenterPosActionType,
): CenterPosState => {
  switch (type) {
    case UPDATE_CENTER_POS_ACTION_TYPES:
      return {
        centerPos: payload,
      };

    default:
      return prev;
  }
};

export default cetnerPosReducer;
