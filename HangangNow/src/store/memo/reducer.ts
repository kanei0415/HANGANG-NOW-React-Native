import { MemoTypes } from '@typedef/components/MyPage/mypage.types';
import { MemoActionTypes } from './actions';
import {
  ADD_MEMO_ACTION_TYPE,
  CLEAR_MEMO_ACTION_TYPE,
  UPDATE_MEMO_ACTION_TYPE,
} from './modules/actionTypes';

export type MemoStates = {
  memo: MemoTypes[];
};

const init: MemoStates = {
  memo: [],
};

const memoReducer = (
  prev: MemoStates = init,
  { type, payload }: MemoActionTypes,
): MemoStates => {
  switch (type) {
    case UPDATE_MEMO_ACTION_TYPE:
      return {
        memo: payload,
      };

    case ADD_MEMO_ACTION_TYPE:
      return {
        memo: [...prev.memo, payload],
      };

    case CLEAR_MEMO_ACTION_TYPE:
      return init;

    default:
      return prev;
  }
};

export default memoReducer;
