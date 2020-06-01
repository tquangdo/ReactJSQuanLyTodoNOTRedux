import React from 'react'

class ControlSort extends React.Component {
  doiSort(order_by, order_dir) {
    this.props.onClickDoiSort(order_by, order_dir)
  }
  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Xếp theo <span className="caret" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><button className="btn btn-default" onClick={() => this.doiSort("name", "asc")}>NAME ASC</button></li>
            <li><button className="btn btn-default" onClick={() => this.doiSort("name", "desc")}>NAME DESC</button></li>
            <li role="separator" className="divider" />
            <li><button className="btn btn-default" onClick={() => this.doiSort("level", "asc")}>LEVEL ASC</button></li>
            <li><button className="btn btn-default" onClick={() => this.doiSort("level", "desc")}>LEVEL DESC</button></li>
          </ul>
          <span className="label label-success label-medium">{this.props.orderBy.toUpperCase()} - {this.props.orderDir.toUpperCase()}</span>
        </div>
      </div>

    )
  }
}
export default ControlSort
