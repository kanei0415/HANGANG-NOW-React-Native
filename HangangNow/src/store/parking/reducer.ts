import { ParkingMarkerTypes } from '@typedef/components/HangangNow/hangangnow.types';
import { ParkingActionTypes } from './actions';
import { UPDATE_PARKING_TYPES } from './modules/actionTypes';

export type ParkingStateTypes = {
  data: ParkingMarkerTypes[];
};

const init: ParkingStateTypes = {
  data: [],
};

const parkingReducer = (
  prev: ParkingStateTypes = init,
  { type, payload }: ParkingActionTypes,
): ParkingStateTypes => {
  switch (type) {
    case UPDATE_PARKING_TYPES:
      return {
        data: payload,
      };

    default:
      return prev;
  }
};

export default parkingReducer;
