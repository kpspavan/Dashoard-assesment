import React from "react";
import { useTable, useSortBy } from "react-table";
import "./Tablecomponent.css";

const TableComponent = ({ columns, data, headerColumns, showChart }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: [
          {
            id: "clicks",
            desc: false,
          },
        ],
      },
      useSortBy
    );

  return (
    <div className="container">
      {headerColumns && (
        <div className="container-div">
          {headerColumns.map((column, index) => (
            <p key={index} className="container-p">
              {column.Header}
            </p>
          ))}
        </div>
      )}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <td key={index} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
