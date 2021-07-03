import React from "react";
import { ScrollView, View } from "@tarojs/components";
import "./index.less";

const scrollTop = 0;
const Threshold = 20;

export const typeArr = [
  { label: "电视剧", value: "dsj" },
  { label: "电影", value: "dy" },
  { label: "综艺", value: "zy" },
  { label: "动漫", value: "dm" },
];

const OptionChoose = (props) => {
  const { optionArr, onClick, nowChoose } = props;

  return (
    <ScrollView
      className="scrollview"
      scrollX
      scrollWithAnimation
      scrollTop={scrollTop}
      lowerThreshold={Threshold}
      upperThreshold={Threshold}
      enableFlex
      // onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
      // onScroll={this.onScroll}
    >
      {optionArr.map((option) => {

        let cn = '';
        if(nowChoose === option.value){
          cn = 'choosed'
        }

        return (
          <View
            className={`${cn} scrollviewItem`}
            onClick={() => {
              onClick(option.value);
            }}
          >
            {option.label}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default OptionChoose;
