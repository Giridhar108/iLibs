import React from "react";

function useShowOnScroll(countImg, setCountImg, dog) {
  React.useEffect(() => {
    const isScroll = () => {
      let windowRelativeBottom =
        document.documentElement.getBoundingClientRect().bottom;

      if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
        setCountImg(countImg + 10);
      }
    };

    window.addEventListener("scroll", isScroll);
    return () => {
      window.removeEventListener("scroll", isScroll);
    };
  }, [countImg]);

  React.useEffect(() => {
    setCountImg(10);
  }, [dog]);
}

export default useShowOnScroll;
