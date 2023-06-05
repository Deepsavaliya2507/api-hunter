 import {
    GET_FIRST_DATA_REQUEST,
    GET_FIRST_DATA_SUCCESS,
    GET_FIRST_DATA_FAILED,
  } from "./actiontypes";
  
  export const getFirstDataRequest = (payload) => ({
    type: GET_FIRST_DATA_REQUEST,
    payload,
  });
  
  export const getFirstDataSuccess = (data) => ({
    type: GET_FIRST_DATA_SUCCESS,
    payload: data,
  });
  
  export const getFirstDataFailed = (error) => ({
    type: GET_FIRST_DATA_FAILED,
    payload: error, 
  });