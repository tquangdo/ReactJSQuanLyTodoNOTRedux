import React from 'react'

class ControlAdd extends React.Component {
  anHienForm() {
    this.props.anHienForm()
  }
  render() {
    return (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" className="btn btn-info btn-block" onClick={() => this.anHienForm()} >{this.props.domAnHien} </button>
      </div>
    )
  }
}
export default ControlAdd
