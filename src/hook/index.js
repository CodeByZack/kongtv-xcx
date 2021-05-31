import { useState, useEffect } from "react";

export const useQuery = (request,config)=>{
  const { initParam, formatResult, initSearch } = config;
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = async (param = {}) => {
    setLoading(true);
    const res = await request(param);
    setLoading(false);
    const result = formatResult ? formatResult(res) : res;
    setList(result || []);
  };
  
  useEffect(() => {
    if (initSearch) {
      query(initParam);
    }
  }, []);
  return { list, loading, query };


};