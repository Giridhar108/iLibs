import React from "react";
import useFetchDogs from "/src/hooks/useFetchDogs.js";
import getValidData from "/src/helpers/getValidData.js";

function Select({ currentDog, setCurrentDog }) {
  const [data, loading, error] = useFetchDogs(
    "https://dog.ceo/api/breeds/list/all"
  );

  const dataForUi = data && getValidData(data);

  React.useEffect(() => {
    if (dataForUi && currentDog === "") {
      setCurrentDog(dataForUi[0]);
    }
  }, [dataForUi]);

  function handleChange(e) {
    setCurrentDog(e.target.value);
  }

  // if (loading) return "Loading";
  if (error) return "Error!";

  return (
    <div className="select-dog">
      <select className="select-dog__field" value={currentDog} onChange={(e) => handleChange(e)}>
        {dataForUi &&
          dataForUi.map((dog) => (
            <option key={dog} value={dog}>
              {dog}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Select;
