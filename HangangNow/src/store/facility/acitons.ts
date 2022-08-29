import { UPDATE_FACILITY_DATA_ACTION_TYPE } from './modules/actionTypes';

export type FacilityCategoryType =
  | 'TOILET'
  | 'SUN_SHADOW'
  | 'BICYCLE'
  | 'VIEW'
  | 'DELIVERY_ZONE CAFE'
  | 'RESTAURANT'
  | 'PARKING'
  | 'STORE'
  | 'LOAD_FOOD'
  | 'BASKETBALL'
  | 'SOCCER'
  | 'BASEBALL'
  | 'TENNIS'
  | 'SWIM';

export type FacilityDataType = {
  address: string;
  name: string;
  x_pos: number;
  y_pos: number;
};

export const updateFacilityDataAction = (data: FacilityDataType[]) => ({
  type: UPDATE_FACILITY_DATA_ACTION_TYPE,
  payload: data,
});

export type FacilityActionType = ReturnType<typeof updateFacilityDataAction>;
