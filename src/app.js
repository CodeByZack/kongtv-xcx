import { Component } from 'react'
import Store from './store/index'
import './app.less'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return <Store.Provider>{this.props.children}</Store.Provider>
  }
}

export default App
