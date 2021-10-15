import React from "react";
import { TableBody } from "../component/TableBody";

export class Table extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="container-md table-main">
        <h1 className="table-heading">{this.props.heading}</h1>
        <div className="row header">
          {this.props.pattern.map((elem) => {
            return (
              <div
                key={elem.cellData}
                className={"col-" + elem.cellSize.toString()}
              >
                {elem.cellName}
              </div>
            );
          })}
        </div>
        <TableBody type={this.props.type}></TableBody>
        {this.props.children}
      </div>
    );
  }
}

export default Table;
