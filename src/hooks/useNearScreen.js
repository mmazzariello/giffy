import { useState, useEffect, useRef } from "react";

export default function useNearScreen({
  distance = "100px",
  externalRef,
} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(function () {
    let observer;

    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      // console.log("entries", entries);
      const el = entries[0];
      // console.log("el", el);
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer").then(() => {
            observer = new IntersectionObserver(onChange, {
              rootMargin: distance,
            });
            observer.observe(element);
          })
    );
    return () => observer && observer.disconnect();
  });
  return { isNearScreen, fromRef };
}
