import {
  updatePartialProfileActionTypes,
  updateProfileAction,
} from '@store/profile/actions';
import { RootState } from '@store/rootReducer';
import { ProfileTypes } from '@typedef/components/common/common.types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function useProfile() {
  const profile = useSelector((root: RootState) => root.profileReducer.profile);

  const dispatch = useDispatch();

  const __updateProfileFromHooks = useCallback(
    (diff: ProfileTypes) => dispatch(updateProfileAction(diff)),
    [dispatch],
  );

  const __updatePartialProfileFromHooks = useCallback(
    (diff: Partial<ProfileTypes>) =>
      dispatch(updatePartialProfileActionTypes(diff)),
    [dispatch],
  );

  return {
    profile,
    __updateProfileFromHooks,
    __updatePartialProfileFromHooks,
  };
}
