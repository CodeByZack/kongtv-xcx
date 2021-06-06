import { useState, useEffect } from "react";
import { createContainer } from "./unstate-next";

const useStore = () => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (detail) {
    }
  }, [detail]);

  return { detail, setDetail };
};

const store = createContainer(useStore);

export default store;
