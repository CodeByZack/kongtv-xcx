import Taro from '@tarojs/taro';
import { useState, useEffect } from 'react';
import Api from '../http';
import { createContainer } from './unstate-next';

const useStore = () => {
  const home = useHome();
  const navBar = useNavBar();
  console.log(navBar);
  // const dy = useCategory("dy");
  // const dsj = useCategory("dsj");
  // const dm = useCategory("dm");
  // const zy = useCategory("zy");
  const category = useCategory();
  const detail = useDetail();
  const searchState = useSearch();
  const jumpUtil = useJumpUtil({ detail, searchState });
  return {
    home,
    navBar,
    category,
    detail,
    searchState,
    jumpUtil,
  };
};

const useJumpUtil = ({ detail, searchState }) => {
  const jumpToDetail = (state) => {
    detail.setNowMovie(state);
    Taro.navigateTo({
      url: '/pages/moviedetail/moviedetail',
    });
  };

  const jumpToSearch = () => {
    Taro.navigateTo({
      url: '/pages/moviesearch/moviesearch',
    });
  };

  const jumpToPlay = (state) => {
    // const url = `/play?name=${state.title}-${state.text}&url=${state.link}`;
    // history.push(url);
  };

  const jumpToHome = (msg) => {
    // eslint-disable-next-line no-console
    console.log(msg);
    history.push({ pathname: '/' });
  };

  const jumpBack = () => Taro.navigateBack();

  return { jumpToDetail, jumpToSearch, jumpToPlay, jumpBack, jumpToHome };
};

const useHome = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [drawerStatus, setDrawerStatus] = useState(false);
  const [adviceMovieList, setAdviceMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAdviceData = async () => {
    setLoading(true);
    const data = await Api.getIndex();
    setAdviceMovieList(data);
    setLoading(false);
  };

  useEffect(() => {
    getAdviceData();
  }, []);

  return {
    tabIndex,
    setTabIndex,
    adviceMovieList,
    drawerStatus,
    setDrawerStatus,
    loading,
  };
};
const useCategory = () => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filterOption, setFilterOption] = useState({});
  const [type, setType] = useState('dsj');

  const getData = async (resetPage) => {
    if (resetPage) {
      setList([]);
      setIsFetching(true);
      const data = await Api.getCategory({
        type,
        options: filterOption,
        page: 1,
      });
      const newList = [...data];
      setList(newList);
      setPage(1);
      setIsFetching(false);
      return;
    }

    if (isFetching) return;
    setIsFetching(true);
    const data = await Api.getCategory({
      type,
      options: filterOption,
      page: page + 1,
    });
    const newList = [...list, ...data];
    setList(newList);
    setPage(page + 1);
    setIsFetching(false);
  };

  useEffect(() => {
    getData(true);
    // eslint-disable-next-line
  }, [filterOption, type]);

  return {
    isFetching,
    page,
    list,
    type,
    setType,
    getData,
    filterOption,
    setFilterOption,
  };
};
const useDetail = () => {
  const [nowMovie, setNowMovie] = useState();
  const clear = () => setNowMovie(null);
  return {
    nowMovie,
    setNowMovie,
    clear,
  };
};

const useSearch = () => {
  const [searchText, setSearchText] = useState();
  const [searchRes, setSearchRes] = useState();

  const search = async () => {
    // Toast.loading('正在加载数据', 0);
    setSearchText(searchText);
    const data = await Api.searchMovie(searchText);
    if (data.length === 0) {
      // Toast.hide();
      // Toast.info('没有搜索到相关影片');
    } else {
      // Toast.hide();
    }
    setSearchRes(data);
  };

  return {
    searchText,
    setSearchText,
    searchRes,
    search,
  };
};

const useNavBar = () => {
  const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
  const systemInfo = Taro.getSystemInfoSync();
  const navBarHeight =
    (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 +
    menuButtonInfo.height +
    systemInfo.statusBarHeight;
  const menuRight = systemInfo.screenWidth - menuButtonInfo.right;
  const menuBotton = menuButtonInfo.top - systemInfo.statusBarHeight;
  const menuHeight = menuButtonInfo.height;

  return { navBarHeight, menuRight, menuBotton, menuHeight };
};

const store = createContainer(useStore);

export const injectStoreProvider = (Comp) => (props) => {
  return (
    <store.Provider>
      <Comp {...props} />
    </store.Provider>
  );
};

export default store;
