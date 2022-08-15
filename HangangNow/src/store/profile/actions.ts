import { ProfileTypes } from '@typedef/components/common/common.types';
import {
  UPDATE_PARTIAL_PROFILE_ACTION_TYPES,
  UPDATE_PROFILE_ACTION_TYPES,
} from './modules/actionTypes';

export const updateProfileAction = (diff: ProfileTypes) => ({
  type: UPDATE_PROFILE_ACTION_TYPES,
  payload: diff,
});

export const updatePartialProfileActionTypes = (
  diff: Partial<ProfileTypes>,
) => ({
  type: UPDATE_PARTIAL_PROFILE_ACTION_TYPES,
  payload: diff,
});

export type ProfileActionTypes =
  | ReturnType<typeof updateProfileAction>
  | ReturnType<typeof updatePartialProfileActionTypes>;
