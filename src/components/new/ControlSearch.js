import React from 'react'

class ControlSearch extends React.Component {
  constructor(props) {
    super(props)
    this.refTim = React.createRef()
  }
  timKiem(tu_khoa) {
    this.props.onClickTimKiem(tu_khoa)
  }
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input type="text" className="form-control" ref={this.refTim} placeholder="Nhập để tìm..." />
          <span className="input-group-btn">
            <button className="btn btn-info" onClick={() => this.timKiem(this.refTim.current.value)}>Tìm kiếm</button>
            <button className="btn btn-default" onClick={() => this.timKiem("")}>Hiện all</button>
          </span>
        </div>
      </div>
    )
  }
}
export default ControlSearch
