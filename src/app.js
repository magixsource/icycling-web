import { createApp } from 'vue'
import Taro from '@tarojs/taro'
import { Button, Toast,Cell,Divider, Card,Tag, CellGroup,Swiper,SwiperItem,Grid, GridItem,Avatar,Badge,Noticebar,Layout,Row,Col,Category, CategoryPane,List} from '@nutui/nutui-taro';
// import NutUI from '@nutui/nutui';
import { VirtualWaterfall as registerVirtualWaterfall } from '@tarojs/components-advanced'
import "@nutui/nutui-taro/dist/styles/themes/default.scss";
import './app.scss'


const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(registerVirtualWaterfall).use(Button).use(Toast).use(Cell).use(Divider).use(CellGroup).use(Swiper).use(Card).use(Tag).use(SwiperItem).use(Grid).use(GridItem).use(Avatar).use(Badge).use(Noticebar).use(Layout).use(Row).use(Col).use(Category).use(List).use(CategoryPane)

export default App
