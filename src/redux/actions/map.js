export const GET_MAP = "map/GET_MAP";

function getMap(map) {
  return {
    type: GET_MAP,
    map
  };
}

export function getMapData(params) {
  // return function(dispatch) {
  //   return fetch(
  //     "/eyesAdmin/eventinfocs/selectEventInfoBycarPlateNumberOrPartyId",
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       body: params
  //     }
  //   )
  //     .then(response => {
  //       console.log(777, response);
  //       dispatch(getMap(response));
  //       // console.log(response.text())
  //       return response.json();
  //     })
  //     .then(json => {
  //       console.log(888, json);
  //       dispatch(getMap(json));
  //     })
  //     .catch(() => {
  //       // dispatch(getUserInfoFail());
  //     });
  // };
  return params;
}
