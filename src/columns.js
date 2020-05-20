import React from "react";
import { uniqWith, isEqual, sum } from "lodash";
import classNames from "classnames";
import matchSorter from "match-sorter";

export default [
  {
    Header: "",
    width: 35,
    filterable: false,
    resizable: false,
    sortable: false,
    Aggregated: cellInfo => {
      const needsExpander =
        cellInfo.subRows && cellInfo.subRows.length > 1 ? true : false;
      const expanderEnabled = !cellInfo.column.disableExpander;
      return needsExpander && expanderEnabled ? (
        <div
          className={classNames("rt-expander", cellInfo.isExpanded && "-open")}
        >
          &bull;
        </div>
      ) : null;
    },
    Cell: null
  },
  { pivot: true },
  {
    Header: "Artikelnummer",
    accessor: "item_code",
    Pivot: row => {
      return <span>{row.value}</span>;
    },
    disableExpander: false,
    filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value, { keys: ["item_code"] }),
    filterAll: true
  },
  {
    Header: "Bezeichnung 1",
    accessor: "description_1",
    aggregate: (values, rows) => uniqWith(values, isEqual).join(", "),
    Aggregated: row => {
      return <span>{row.value}</span>;
    },
    Cell: cellInfo => null,
    filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value, { keys: ["description_1"] }),
    filterAll: true
  },
  {
    Header: "Bezeichnung 2",
    accessor: "description_2",
    aggregate: (values, rows) => uniqWith(values, isEqual).join(", "),
    Aggregated: row => {
      return <span>{row.value}</span>;
    },
    Cell: cellInfo => null,
    filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value, { keys: ["description_2"] }),
    filterAll: true
  },
  {
    Header: "Anzahl",
    accessor: "quantity",
    aggregate: (values, rows) => sum(values),
    filterable: false
  },
  {
    Header: "Lot",
    accessor: "lot",
    aggregate: (values, rows) => uniqWith(values, isEqual).join(", "),
    filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value, { keys: ["lot"] }),
    filterAll: true
  }
];
