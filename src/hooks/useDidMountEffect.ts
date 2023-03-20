import { useEffect, useState } from "react";

export const useDidMountEffect = (fn: () => any, dependencies: Array<any>) => {
  //   const didMountRef = useRef(false);

  //   useEffect(() => {
  //     if (didMountRef.current) {
  //       fn();
  //     } else {
  //       didMountRef.current = true;
  //     }
  //   }, dependencies);

  const [firstRenderDone, setFirstRenderDone] = useState(false);

  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      fn();
    }
  }, [firstRenderDone, dependencies, fn]);
};

// not used
