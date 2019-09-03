import { GET_MAP } from "actions/map";

const initState = {
  mapData: [{a:1,b:2},{a:3,b:4}]
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_MAP:
      return {
        ...state,
        // mapData: action.map
      };
    default:
      return state;
  }
}
