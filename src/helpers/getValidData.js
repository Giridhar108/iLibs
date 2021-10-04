import React from "react";

function getValidData(data) {
  return Object.entries(data.message).reduce((acc, el) => {
    if (el[1].length > 0) {
      const result = [];
      for (let value of el[1]) {
        result.push(`${el[0]} ${value}`);
      }
      return [...acc, ...result];
    }

    return [...acc, el[0]];
  }, []);
}

export default getValidData;
