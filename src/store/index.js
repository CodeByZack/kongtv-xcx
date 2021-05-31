import { createContainer } from './unstate-next';
import { useState, useEffect } from 'react';

const useStore = ()=>{

  const [detail,setDetail] = useState(null);

  return {detail,setDetail};
};

const store = createContainer(useStore);

export default store;
