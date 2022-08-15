import { UPDATE_CENTER_POS_ACTION_TYPES } from './modules/actionTypes';

export const updateCenterPosAction = (diff: { lat: number; lng: number }) => ({
  type: UPDATE_CENTER_POS_ACTION_TYPES,
  payload: diff,
});

export type CenterPosActionType = ReturnType<typeof updateCenterPosAction>;
