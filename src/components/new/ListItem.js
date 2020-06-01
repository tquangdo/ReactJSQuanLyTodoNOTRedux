import React from 'react'

class ListItem extends React.Component {
  xoa(uid_mang) {
    this.props.onClickXoa(uid_mang)
  }
  sua(json_item) {
    this.props.onClickSua(json_item)
  }
  doiLevelSo2Chu(level) {
    var elm_level_chu = <span className="label label-default">Thấp</span>
    if (level === 1) {
      elm_level_chu = <span className="label label-info">Vừa</span>
    } else if (level === 2) {
      elm_level_chu = <span className="label label-danger">Cao</span>
    }
    return elm_level_chu
  }
  render() {
    return (
      <tr>
        <td className="text-center">{this.props.chiso + 1}</td>
        <td>{this.props.item.name} </td>
        <td className="text-center">{this.doiLevelSo2Chu(this.props.item.level)}</td>
        <td>
          <button type="button" className="btn btn-warning" onClick={() => this.sua(this.props.item)}>Sửa</button>
          <button type="button" className="btn btn-danger" onClick={() => this.xoa(this.props.item.uid)}>Xóa</button>
        </td>
      </tr>
    )
  }
}
export default ListItem
