import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import { Table, Row, Col, Button, Input, CustomInput } from "reactstrap";

export default function CustomTable({ columns, data }) {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    //rows, // rows for the table based on the data passed
    page,
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    // below new props related to 'usePagination' hook
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? "🔽" : " 🔼") : "";
  };

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  return (
    <>
      <Table bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                 <div>
                  {column.render("Header")}
                  {generateSortingIndicator(column)}
                  </div>  
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Row style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <Col md={3}>
          <Button
            color="btn btn-outline-primary btn-sm"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <i className="fa-solid fa-chevron-left" />
            <i className="fa-solid fa-chevron-left" />
          </Button>
          <Button
            color="btn btn-outline-primary btn-sm"
            onClick={previousPage}
            disabled={!canPreviousPage}
          >
            <i className="fa-solid fa-chevron-left" />
          </Button>
        </Col>
        <Col md={2} style={{ marginTop: 7 }}>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </Col>
        <Col md={2}>
          <Input
            type="number"
            min={1}
            style={{ width: 70 }}
            max={pageOptions.length}
            defaultValue={pageIndex + 1}
            onChange={onChangeInInput}
          />
        </Col>
        <Col md={2}>
          <Input type="select" value={pageSize} onChange={onChangeInSelect}>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Input>
        </Col>
        <Col md={3}>
          <Button color="btn btn-outline-primary btn-sm" onClick={nextPage} disabled={!canNextPage}>
            <i className="fa-solid fa-chevron-right" />
          </Button>
          <Button
            color="btn btn-outline-primary btn-sm"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <i className="fa-solid fa-chevron-right" />
            <i className="fa-solid fa-chevron-right" />
          </Button>
        </Col>
      </Row>
    </>
  );
}
