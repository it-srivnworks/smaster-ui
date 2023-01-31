import React, { useEffect, useState } from "react";
import useHttpGET from "../../hooks/common/useHttpGET";
import * as AppConstants from "../../reduxstore/AppConstants";
import logo from "../../assets/images/booktitle.png";

const ViewBookDetails = (props) => {
  console.log("---ViewBookDetails");
  const { sendGETReq: getBookDetails } = useHttpGET();
  const [bookId, setBookId] = useState(props.id);
  const [bookData, setBookData] = useState([]);

  const processResp = (statusCode, data) => {
    if (statusCode == AppConstants.HTTP_OK) {
      setBookData(data);
      console.log(bookData);
    } else {
      //TODO  : Code to put error message
    }
  };

  const loadData = () => {
    console.log("Loading Data");
    const url = "http://localhost:3000/books/" + bookId;
    getBookDetails(url, processResp);
  };

  const backToParent = () => {
    props.closedSection();
  };

  useEffect(() => {
    loadData();
  }, [bookId]);

  return (
    <>
      <div className="content-wrapper">
        <div className="card card-solid">
          <div className="card-header-smaster">
            <h5>
              View Book Info
              <button
                type="button"
                className="btn-close-smaster btn-close-white"
                aria-label="Close"
                onClick={backToParent}
              >
                <i className="fa-solid fa-rectangle-xmark" />
              </button>
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={logo} className="product-image" alt="Product Image" />
              </div>
              <div className="col-md-4">
                <div className="row">
                  <h2>{bookData.title}</h2>
                </div>
                <div className="row">
                  <p className="fs-5">
                    <strong>Author : </strong>
                    {bookData.author}
                  </p>
                  <p className="fs-5">
                    <strong>ISBN : </strong>
                    {bookData.isbn}
                  </p>
                  <p className="fs-5">
                    <strong>Website : </strong>
                    {bookData.website}
                  </p>
                  <p className="fs-5">
                    <strong>Count : </strong>
                    {bookData.count}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <p className="fs-3">Description</p>
                <p className="fs-5">
                  Lorem ipsum represents a long-held tradition for designers,
                  typographers and the like. Some people hate it and argue for
                  its demise, but others ignore the hate as they create awesome
                  tools to help create filler text for everyone from bacon
                  lovers to Charlie Sheen fans. Share Like
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-body text-primary">
              <button
                type="button"
                className="btn btn-primary"
                onClick={backToParent}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBookDetails;
