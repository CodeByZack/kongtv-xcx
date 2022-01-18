import { useState } from "react";
import { View, Video } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane, AtAccordion } from "taro-ui";
import Taro from "@tarojs/taro";
import "./moviedetail.less";
import store from "../../store";
import { decodeJuJi } from "../../tools";
import NavBar, { withNavBar } from "../../components/navbar";

const Moviedetail = () => {
  const { detail } = store.useContainer();
  const [playItem, setPlayItem] = useState({});
  const [curTab, setCurTab] = useState(0);
  const [open, setOpen] = useState(false);

  const { nowMovie } = detail;
  console.log(nowMovie);
  const playSources = decodeJuJi(nowMovie.vod_play_url);
  Taro.setNavigationBarTitle({
    title: `${nowMovie.vod_name}/${playItem.text || ""}`,
  });
  const tabList = playSources.map((_, i) => ({ title: `资源${i}` }));

  return (
    <NavBar title={`${nowMovie.vod_name}/${playItem.text || ""}`} showBack>
      <View className="moviedetail">
        <Video
          className="video-container"
          id="video"
          src={playItem.link}
          initialTime="0"
          controls
          direction={90}
          show-screen-lock-button
          autoplay={true}
          loop={false}
          showCastingButton
          muted={false}
        />
        <AtAccordion open={open} onClick={setOpen} title="简介：">
          <View className="movie-desc">{nowMovie.vod_content}</View>
        </AtAccordion>
        <AtTabs current={curTab} tabList={tabList} onClick={setCurTab}>
          {playSources.map((playSource, index) => {
            return (
              <AtTabsPane current={curTab} index={index}>
                <View className="at-row at-row--wrap">
                  {(playSource || []).map((item) => {
                    return (
                      <View className="at-col at-col-4">
                        <AtButton
                          onClick={() => {
                            setPlayItem(item);
                          }}
                        >
                          {item.text}
                        </AtButton>
                      </View>
                    );
                  })}
                </View>
              </AtTabsPane>
            );
          })}
        </AtTabs>
      </View>
    </NavBar>
  );
};

export default Moviedetail;
