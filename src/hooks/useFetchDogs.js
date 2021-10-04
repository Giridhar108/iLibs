import React from "react";

function useFetchDogs(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(`error fetching data: ${error}`);
        setError(error);
      })
      .finally((_) => {
        setLoading(false);
      });
  }, []);

  return [data, loading, error];
}

export default useFetchDogs;
