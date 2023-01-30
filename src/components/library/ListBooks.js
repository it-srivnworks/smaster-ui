import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import CustomTable from "../../hooks/common/CustomTable";
import DetailsTag from "../../hooks/common/DetailsTag";
import useHttpGETParam from "../../hooks/common/useHttpGET";
import * as AppConstants from "../../reduxstore/AppConstants";

const ListBooks = () => {
  const [bookList, setBookList] = useState([]);
  const { sendGETReq: getBookList } = useHttpGETParam();

  const processResp = (statusCode, data) => {
    console.log("processResp................" + statusCode);
    if (statusCode == AppConstants.HTTP_OK) {
      setBookList(data);
    } else {
      //TODO  : Code to put error message
    }
  };

  const loadData = () => {
    console.log("Loading Data");
    const url = "http://localhost:3000/books";
    getBookList(url, processResp);
  };

  const columns = useMemo(() => [
    {
      // Second group - Details
      Header: "Books List",
      // Second group columns
      columns: [
        {
          Header: "Title",
          Cell: (row) => {
            return <div>{Number(row.row.id) + 1}</div>;
          },  
        },
        {
          Header: "Title",
          accessor: "title",
        },
        {
          Header: "Author",
          accessor: "author",
        },
        {
          Header: "Count",
          accessor: "count",
        },
        {
          Header: "Details",
          accessor: "website",
          Cell: (props) => {
            console.log(props.cell.value)
            return (<DetailsTag detailLink={props.cell.value}/>)
          }
        },
      ],
    },
  ]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="content-wrapper" style={{ minHeight: "1200px" }}>
        <div className="card">
          <div className="card-header">Books List</div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12">
                <CustomTable columns={columns} data={bookList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListBooks;
