export default {
  pages: [
    "pages/moviehome/moviehome",
    // "pages/video/video",
    "pages/moviedetail/moviedetail",
    "pages/moviecategory/moviecategory",
    // "pages/moviesearch/moviesearch",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "风影院",
    navigationBarTextStyle: "black",
    navigationStyle: 'custom'
  },
  tabBar: {
    list: [
      {
        // iconPath: "resource/latest.png",
        // selectedIconPath: "resource/lastest_on.png",
        pagePath: "pages/moviehome/moviehome",
        text: "首页",
      },
      {
        // iconPath: "resource/hotest.png",
        // selectedIconPath: "resource/hotest_on.png",
        pagePath: "pages/moviecategory/moviecategory",
        text: "分类",
      },
      // {
      //   // iconPath: "resource/node.png",
      //   // selectedIconPath: "resource/node_on.png",
      //   pagePath: "pages/moviesearch/moviesearch",
      //   text: "搜索",
      // },
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white",
  },
};
