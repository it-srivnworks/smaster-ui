import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import CustomTable from "../../hooks/common/CustomTable";
import DetailsTag from "../../hooks/common/DetailsTag";
import useHttpGET from "../../hooks/common/useHttpGET";
import * as AppConstants from "../../reduxstore/AppConstants";

const ListBooks = (props) => {
  console.log("---ListBooks");
  const [bookList, setBookList] = useState([]);
  const { sendGETReq: getBookList } = useHttpGET();

  const processResp = (statusCode, data) => {
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

  const openBookDetail = (id) => {
    props.openDetail(id);
  };

  const columns = useMemo(() => [
    {
      Header: "Books List",
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
          accessor: "id",
          Cell: (props) => {
            return (
              <DetailsTag openDetail={openBookDetail} id={props.cell.value} />
            );
          },
        },
      ],
    },
  ]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="card">
          <div className="card-header-smaster">
            <h5>
              Books List
            </h5>
          </div>
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
