import React from 'react'
import ControlSearch from './ControlSearch'
import ControlSort from './ControlSort'
import ControlAdd from './ControlAdd'

class Control extends React.Component {
  render() {
    return (
      <div className="row">
        <ControlSearch onClickTimKiem={this.props.onClickTimKiem}></ControlSearch>
        <ControlSort
          orderBy={this.props.orderBy}
          orderDir={this.props.orderDir}
          onClickDoiSort={this.props.onClickDoiSort}
        ></ControlSort>
        <ControlAdd anHienForm={this.props.anHienForm}
          domAnHien={this.props.domAnHien}
        ></ControlAdd>
      </div>
    )
  }
}
export default Control
