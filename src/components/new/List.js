import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {
  render() {
    var elm_mangmuccons = this.props.mangmuccons.map((item, chiso) => {
      return (<ListItem key={chiso} chiso={chiso} item={item}
        onClickXoa={this.props.onClickXoa}
        onClickSua={this.props.onClickSua}
      ></ListItem>)
    })
    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Tasks</div>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th style={{ width: '10%' }} className="text-center">#</th>
              <th>NAME</th>
              <th style={{ width: '20%' }} className="text-center">LEVEL</th>
              <th style={{ width: '20%' }}>Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody>
            {elm_mangmuccons}
          </tbody>
        </table>
      </div>
    )
  }
}

export default List
