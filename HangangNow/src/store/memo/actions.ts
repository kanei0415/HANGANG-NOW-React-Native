import { MemoTypes } from '@typedef/components/MyPage/mypage.types';
import {
  ADD_MEMO_ACTION_TYPE,
  CLEAR_MEMO_ACTION_TYPE,
  UPDATE_MEMO_ACTION_TYPE,
} from './modules/actionTypes';

export const updateMemoAction = (diff: MemoTypes[]) => ({
  type: UPDATE_MEMO_ACTION_TYPE,
  payload: diff,
});

export const addMemoAction = (diff: MemoTypes) => ({
  type: ADD_MEMO_ACTION_TYPE,
  payload: diff,
});

export const clearMemoAction = () => ({
  type: CLEAR_MEMO_ACTION_TYPE,
  payload: [],
});

export type MemoActionTypes =
  | ReturnType<typeof updateMemoAction>
  | ReturnType<typeof addMemoAction>
  | ReturnType<typeof clearMemoAction>;
