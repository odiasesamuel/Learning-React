import React from "react";
import * as XLSX from "xlsx";
import ReactPaginate from "react-paginate";

import "./ExcelTable.css";
// import classes from "./ExcelTable.module.css"

const ExcelTable = () => {
  const [data, setData] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(0);

  const handleImport = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const columns = excelData[0];
      const rows = excelData.slice(1);
      setData({ columns, rows });
      setCurrentPage(0);
    };
    reader.readAsBinaryString(file);
  };

  const itemsPerPage = 6; // Number of items per page
  const pageCount = Math.ceil((data?.rows?.length || 0) / itemsPerPage);
  const startIndex = currentPage * itemsPerPage + 1;
  const endIndex = Math.min(
    (currentPage + 1) * itemsPerPage,
    data?.rows?.length
  );
  const totalRows = data?.rows?.length || 0;

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const displayData = data?.rows?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      <input type="file" onChange={handleImport} />
      {data && (
        <>
          <table>
            <thead>
              <tr>
                {data.columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <p>
              Showing rows {startIndex} to {endIndex} of {totalRows}
            </p>
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </>
      )}
    </div>
  );
};

export default ExcelTable;
