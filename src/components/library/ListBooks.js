import React, { useState } from "react";
import { useEffect } from "react";
import useHttpGETParam from "../../hooks/common/useHttpGET";
import * as AppConstants from "../../reduxstore/AppConstants";

const ListBooks = () => {
  const [bookList, setBookList] = useState([]);
  const { sendGETReq: getBookList } = useHttpGETParam();

  const processResp = (statusCode, data) => {
    console.log("processResp................" + statusCode);
    if(statusCode == AppConstants.HTTP_OK){
      setBookList(data);
    }else{
      //TODO  : Code to put error message
    } 
  };

  const loadData = () => {
    console.log("Loading Data");
    const url = "http://localhost:3000/books";
    getBookList(url, processResp);
  };

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
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">SrNo</th>
                      <th scope="col">Title</th>
                      <th scope="col">Author</th>
                      <th scope="col">Count</th>
                      <th scope="col">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookList.map((book, index) => (
                      <tr key={book.isbn}>
                        <th scope="row">{index + 1}</th>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.pages}</td>
                        <td><button type="button" className="btn btn-outline-info btn-sm">Details</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-sm-12">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListBooks;
