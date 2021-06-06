import { View, Image } from "@tarojs/components";
import { noop } from "../../tools";
import "./index.less";

const MovieItem = (props) => {
  const { vod_pic, vod_name, onClick = noop } = props;
  return (
    <View onClick={onClick} className="movie-item-container">
      <View className="img-container">
        <Image mode="scaleToFill" className="cover" src={vod_pic} />
      </View>
      <View className="movie-item-title">{vod_name}</View>
    </View>
  );
};

export const MovieGrid = (props) => {
  const { movies, handleClick = noop } = props;

  return (
    <View className="at-row at-row--wrap">
      {(movies || []).map((d) => {
        console.log(d);
        return (
          <View className="at-col at-col-4">
            <MovieItem onClick={() => handleClick(d)} {...d} />
          </View>
        );
      })}
    </View>
  );
};

export default MovieItem;
