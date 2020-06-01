import React from 'react'
import Title from './Title'
import Control from './Control'
import Form from './Form'
import List from './List'
import mock_list_items from '../../mocks/mockListItems'
import { filter, includes, orderBy as funcOrderBy, remove, reject } from 'lodash' // https://lodash.com/
var { uuid } = require("uuidv4")

class NgoaiCung extends React.Component {
  txtThemSua = "Thêm" // có thể khai báo biến ở đây hoặc nếu trong constructor thì thêm "this.txtThemSua"
  constructor(props) {
    super(props)
    this.state = {
      stateIsHienForm: false,
      stateTxtTimKiem: "",
      stateOrderBy: "name",
      stateMangGoc: mock_list_items, // phải dùng state cho mảng list thì mới UPD realtime screen
      stateOrderDir: "asc",
      stateItemEdit: null
    }
  }
  UNSAFE_componentWillMount() {
    this.setState({ stateMangGoc: (JSON.parse(localStorage.getItem('mangItems')) || mock_list_items) })
    // phải có "|| mock_list_items"
  }
  // Ẩn/Hiện mục thêm task
  anHienForm = () => {
    this.txtThemSua = "Thêm"
    this.setState({
      stateIsHienForm: !this.state.stateIsHienForm,
      stateItemEdit: null
    })
  }
  // Xếp theo
  onClickDoiSort = (order_by, order_dir) => {
    this.setState({
      stateOrderBy: order_by,
      stateOrderDir: order_dir
    })
  }
  // Thêm OR Sửa
  onClickThem = (json_item) => {
    var { stateMangGoc } = this.state
    var uid_tmp = ''
    if (json_item.uid !== '') { // Sửa
      stateMangGoc = reject(stateMangGoc, { uid: json_item.uid })// (lodash)
      uid_tmp = json_item.uid
    } else { // Thêm
      uid_tmp = uuid()
    }
    stateMangGoc.push({
      uid: uid_tmp,
      name: json_item.name,
      level: +json_item.level // convert string->int
    })
    this.setState({
      stateMangGoc: stateMangGoc,
      stateIsHienForm: false // bắt buộc phải có để phân biệt Thêm & Sửa
      // nếu ko đóng Form lại thì KO thể phân biệt Form.handleChange() giữa Thêm & Sửa
    })
    localStorage.setItem('mangItems', JSON.stringify(stateMangGoc))
  }
  // Sửa
  onClickSua = (json_item) => {
    this.txtThemSua = "Sửa"
    this.setState({
      stateItemEdit: json_item,
      stateIsHienForm: true
    })
  }
  // Tìm kiếm
  onClickTimKiem = (noi_dung) => {
    this.setState({ stateTxtTimKiem: noi_dung })
  }
  // Xóa
  onClickXoa = (uid_mang) => { // phải dùng uid mà KO phải là <id of array> vì mangDich đã bị đảo <id of array> & bị filter so với stateMangGoc
    var { stateMangGoc } = this.state
    remove(stateMangGoc, (item) => {// (lodash)
      return (item.uid === uid_mang)
    })
    this.setState({ stateMangGoc: stateMangGoc })
    localStorage.setItem('mangItems', JSON.stringify(stateMangGoc))
  }
  render() {
    var mangGoc = (this.state.stateMangGoc !== null) ? [...this.state.stateMangGoc] : [...mock_list_items]
    // dù edit mangGoc nhưng KO ảnh hưởng mock_list_items, nhưng KO thể code cho datatype khác iterator
    var mangDich = []
    // Tìm kiếm (lodash)
    mangDich = filter(mangGoc, (item) => {
      return includes(item.name.toLowerCase(), this.state.stateTxtTimKiem.toLowerCase())
    })
    // Xếp theo (lodash)
    mangDich = funcOrderBy(mangDich, [this.state.stateOrderBy], [this.state.stateOrderDir])
    // Ẩn/Hiện mục thêm task
    var domAnHien = null
    var domForm = null
    if (this.state.stateIsHienForm) {
      domForm = (<Form onClickThem={this.onClickThem}
        anHienForm={this.anHienForm}
        propItemEdit={this.state.stateItemEdit}
        txtThemSua={this.txtThemSua}
      ></Form>)
      domAnHien = (<i>Ẩn mục thêm task</i>)
    } else {
      domAnHien = (<b>Hiện mục thêm task</b>)
    }
    return (
      <div>
        <Title></Title>
        <Control anHienForm={this.anHienForm}
          domAnHien={domAnHien}
          onClickDoiSort={this.onClickDoiSort}
          onClickTimKiem={this.onClickTimKiem}
          orderBy={this.state.stateOrderBy}
          orderDir={this.state.stateOrderDir}
        ></Control>
        {domForm}
        <List
          mangmuccons={mangDich}
          onClickXoa={this.onClickXoa} onClickSua={this.onClickSua} ></List>
      </div>
    )
  }
}
export default NgoaiCung