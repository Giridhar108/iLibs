import React, { Suspense } from "react";
import useFetchOneDog from "/src/hooks/useFetchOneDog.js";
import ContentLoaderBlock from "./ContentLoaderBlock.jsx";

const Img = React.lazy(() => import("./Img.jsx"));

function Dogs({ currentDog }) {
  const [dog, loadingDog, errorDog] = useFetchOneDog(currentDog);

  if (errorDog) return "Error!";

  const lengthDogs = dog?.message?.length;
  return (
    <div className="dogs">
      {!loadingDog
        ? dog.message.map((dog, i) => {
            if (`${i + 1}`.includes("3") || `${i + 1}`.includes("6")) {
              return (
                <div key={dog} className={lengthDogs < 10 ? "wide" : "tall"}>
                  <Suspense fallback={<ContentLoaderBlock />}>
                    <Img dog={dog} />
                  </Suspense>
                </div>
              );
            }

            if (`${i + 1}`.includes("4")) {
              return (
                <div key={dog} className={lengthDogs < 10 ? "tall" : "wide"}>
                  <Suspense fallback={<ContentLoaderBlock />}>
                    <Img dog={dog} />
                  </Suspense>
                </div>
              );
            }

            if (`${i + 1}`.includes("7")) {
              return (
                <div key={dog} className="big">
                  <Suspense fallback={<ContentLoaderBlock />}>
                    <Img dog={dog} />
                  </Suspense>
                </div>
              );
            }

            return (
              <div key={dog} className="small">
                <Suspense fallback={<ContentLoaderBlock />}>
                  <Img dog={dog} />
                </Suspense>
              </div>
            );
          })
        : Array(9)
            .fill(0)
            .map((_, index) => <ContentLoaderBlock key={index} />)}
    </div>
  );
}

export default Dogs;
