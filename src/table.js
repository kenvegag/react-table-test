import React, { Component } from "react";
import ReactTable from "react-table";
import data from "./data";
import { handleTableCellClick } from "./tblFunctions";
import columns from "./columns.js";
class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: {}
    };
    this.handleTableCellClick = handleTableCellClick.bind(this);
    this.onExpandedChange = this.onExpandedChange.bind(this);
  }

  onExpandedChange(newExpanded) {
    this.setState({
      expanded: newExpanded
    });
  }

  render() {
    return (
      <ReactTable
        data={data}
        getTdProps={this.handleTableCellClick}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value
        }
        pivotBy={["item_code"]}
        onPageChange={pageIndex => {
          this.onExpandedChange({});
        }}
        onPageSizeChange={(pageSize, pageIndex) => {
          this.onExpandedChange({});
        }}
        onSortedChange={(newSorted, column, shiftKey) => {
          this.onExpandedChange({});
        }}
        onFilteredChange={(filtered, column) => {
          this.onExpandedChange({});
        }}
        onExpandedChange={newExpanded => this.onExpandedChange(newExpanded)}
        expanded={this.state.expanded}
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}

export default TableComponent;
