import {
  addMemoAction,
  clearMemoAction,
  updateMemoAction,
} from '@store/memo/actions';
import { RootState } from '@store/rootReducer';
import { MemoTypes } from '@typedef/components/MyPage/mypage.types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function useMemoList() {
  const memoList = useSelector((root: RootState) => root.memoReducer.memo);

  const dispatch = useDispatch();

  const __updateMemoListFromHooks = useCallback(
    (diff: MemoTypes[]) => dispatch(updateMemoAction(diff)),
    [dispatch],
  );

  const __addMemoListFromHooks = useCallback(
    (diff: MemoTypes) => dispatch(addMemoAction(diff)),
    [dispatch],
  );

  const __clearMemoListFromHooks = useCallback(
    () => dispatch(clearMemoAction()),
    [dispatch],
  );

  return {
    memoList,
    __updateMemoListFromHooks,
    __addMemoListFromHooks,
    __clearMemoListFromHooks,
  };
}
