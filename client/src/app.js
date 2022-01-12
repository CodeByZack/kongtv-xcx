import Taro from '@tarojs/taro';
import 'taro-ui/dist/style/index.scss';
import { injectStoreProvider } from './store/index';
import './app.less';
import { View } from '@tarojs/components';

Taro.cloud.init({
  env: Taro.cloud.DYNAMIC_CURRENT_ENV,
});

function App(props) {
  return (
    <View>
      {/* 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情 */}
      {/* props.children 是将要被渲染的页面 */}
      {props.children}
    </View>
  );
}
export default injectStoreProvider(App);
