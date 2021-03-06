import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_BY_ALPHABET = "FILTER_BY_ALPHABET";
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS";
export const GET_TEMPERAMENT_LIST = "GET_TEMPERAMENT_LIST";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const GET_DOG_BREED = "GET_DOG_BREED";
export const POST_DOG = "POST_DOG";
export const GET_DETAIL = "GET_DETAIL";
export const SET_CLEAR_DETAIL = "SET_CLEAR_DETAIL";

export function getDogs() {
  return async function (dispatch) {
    let jsonDogs = await axios.get("/dogs");
    return dispatch({ type: GET_DOGS, payload: jsonDogs.data });
  };
}

export function filterByAlphabet(payload) {
  return {
    type: FILTER_BY_ALPHABET,
    payload,
  };
}

export function filterCrated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function getTemperamentList() {
  return async function (dispatch) {
    var jsonTemp = await axios.get("/temperaments");
    return dispatch({
      type: GET_TEMPERAMENT_LIST,
      payload: jsonTemp.data,
    });
  };
}

export function getDogBreed(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get("/dogs?name=" + name);
      return dispatch({
        type: GET_DOG_BREED,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
      alert("Breed not found");
    }
  };
}

export function postDog(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/dogs", payload);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterByTemperament(payload) {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
}

export function setCleartDetail() {
  return {
    type: SET_CLEAR_DETAIL,
    payload: [],
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const jsonDetail = await axios.get("/dogs/" + id);
      console.log(jsonDetail.data);
      return dispatch({
        type: GET_DETAIL,
        payload: jsonDetail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
