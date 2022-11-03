import { count, COUNT, FILTER_ROOMS, GET_ROOMS, SORT_ROOMS } from "./actions";

const initState = {
  rooms: [],
  count: 1,
};

export const Reducer = (store = initState, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return { ...store, rooms: action.payload };

    case FILTER_ROOMS:
      return { ...store, rooms: action.payload };
    case COUNT:
      return { ...store, count: count.count + action.payload };
    case SORT_ROOMS:
      return { ...store, rooms: action.payload };
    default:
      return store;
  }
};
