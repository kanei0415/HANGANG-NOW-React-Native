import { FacilityActionType, FacilityDataType } from './acitons';
import { UPDATE_FACILITY_DATA_ACTION_TYPE } from './modules/actionTypes';

export type FacilityStateType = {
  data: FacilityDataType[];
};

const init: FacilityStateType = {
  data: [],
};

const facilityReducer = (
  prev: FacilityStateType = init,
  { type, payload }: FacilityActionType,
): FacilityStateType => {
  switch (type) {
    case UPDATE_FACILITY_DATA_ACTION_TYPE:
      return {
        data: payload,
      };

    default:
      return prev;
  }
};

export default facilityReducer;
