import { useState } from "react";
import { View, Video } from "@tarojs/components";
import { AtButton, AtTabs, AtTabsPane,AtAccordion } from "taro-ui";
import Taro from "@tarojs/taro";
import "./moviedetail.less";
import store from "../../store";
import { decodeJuJi } from "../../tools";

const Moviedetail = () => {
  const { detail } = store.useContainer();
  const [playUrl, setPlayUrl] = useState("");
  const [curTab, setCurTab] = useState(0);
  const [open,setOpen] = useState(false);

  const playSources = decodeJuJi(detail.vod_play_url);

  Taro.setNavigationBarTitle({
    title: detail.vod_name,
  });
  const tabList = playSources.map((_, i) => ({ title: `资源${i}` }));
  return (
    <View className="moviedetail">
      <Video
        className="video-container"
        id="video"
        src={playUrl}
        initialTime="0"
        controls
        autoplay={false}
        loop={false}
        showCastingButton
        muted={false}
      />
      <AtAccordion
        open={open}
        onClick={setOpen}
        title="简介："
      >
        <View className="movie-desc">{detail.vod_content}</View>
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
                          setPlayUrl(item.link);
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
  );
};

export default Moviedetail;
