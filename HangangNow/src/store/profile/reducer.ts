import { ProfileTypes } from '@typedef/components/common/common.types';
import { ProfileActionTypes } from './actions';
import {
  UPDATE_PARTIAL_PROFILE_ACTION_TYPES,
  UPDATE_PROFILE_ACTION_TYPES,
} from './modules/actionTypes';

export type ProfileStateType = {
  profile: ProfileTypes | null;
};

const init: ProfileStateType = {
  profile: null,
};

const profileReducer = (
  prev: ProfileStateType = init,
  { type, payload }: ProfileActionTypes,
): ProfileStateType => {
  switch (type) {
    case UPDATE_PROFILE_ACTION_TYPES:
      return {
        profile: payload,
      };

    case UPDATE_PARTIAL_PROFILE_ACTION_TYPES:
      return {
        ...prev,
        ...payload,
      };

    default:
      return prev;
  }
};

export default profileReducer;
