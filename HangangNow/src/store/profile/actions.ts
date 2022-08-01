import { ProfileTypes } from '@typedef/components/common/common.types';
import { UPDATE_PROFILE_ACTION_TYPES } from './modules/actionTypes';

export const updateProfileAction = (diff: ProfileTypes) => ({
  type: UPDATE_PROFILE_ACTION_TYPES,
  payload: diff,
});

export type ProfileActionTypes = ReturnType<typeof updateProfileAction>;
