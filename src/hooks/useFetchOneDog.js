import React from "react";

function useFetchOneDog(currentDog) {
  const [dog, setDog] = React.useState(null);
  const [loadingDog, setLoadingDog] = React.useState(true);
  const [errorDog, setErrorDog] = React.useState(null);

  React.useEffect(() => {
    if (currentDog) {
      fetch(`https://dog.ceo/api/breed/${currentDog.replace(/ /g, "/")}/images`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setDog(data);
        })
        .catch((error) => {
          console.error(`error fetching data: ${error}`);
          setErrorDog(error);
        })
        .finally((_) => {
          setLoadingDog(false);
        });
    }
  }, [currentDog]);

  return [dog, loadingDog, errorDog];
}

export default useFetchOneDog;
