import React from "react";
import useHttpPOST from "../../hooks/common/useHttpPOST";
import useInputISBN from "../../hooks/ui/useInputISBN";
import useInputTxt from "../../hooks/ui/useInputTxt";
import useInputURL from "../../hooks/ui/useInputURL";

const AddNewBook = (props) => {
  console.log("---AddNewBook");

  const {
    inputVal: idInputVal,
    isValError: idError,
    errorMsg: idErrorMsg,
    valChangeH: idChangeH,
    resetField: idReset,
  } = useInputTxt(2);

  const {
    inputVal: nameInputVal,
    isValError: nameError,
    errorMsg: nameErrorMsg,
    valChangeH: nameChangeH,
    resetField: nameReset,
  } = useInputTxt(10);

  const {
    inputVal: authorInputVal,
    isValError: authorError,
    errorMsg: authorErrorMsg,
    valChangeH: authorChangeH,
    resetField: authorReset,
  } = useInputTxt(5);

  const {
    inputVal: isbnInputVal,
    isValError: isbnError,
    errorMsg: isbnErrorMsg,
    valChangeH: isbnChangeH,
    resetField: isbnReset,
    validateISBN: validateISBN,
  } = useInputISBN(10, 10);

  const {
    inputVal: urlInputVal,
    isValError: urlError,
    errorMsg: urlErrorMsg,
    valChangeH: urlChangeH,
    resetField: urlReset,
  } = useInputURL();


  const {
    isReqComplete,
    respStatusCode ,
    respMessage,
    respError,
    sendPOSTReq: addNewBook
  } = useHttpPOST();

  const respFunc = (respCode,respData) => {
    console.log(respData)
  }
  
  const backToParent = () => {
    props.closedSection();
  };

  const addNewBookH = () => {
    const url = "http://localhost:3000/books/";
    const addData = {
      id: idInputVal,
      title: nameInputVal,
      author: authorInputVal,
      isbn: isbnInputVal,
      website: urlInputVal,
    };
    addNewBook(url, addData, respFunc)
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header-smaster">
                <h5>Add New Book<button
                type="button"
                className="btn-close-smaster btn-close-white"
                aria-label="Close"
                onClick={backToParent}
              >
                <i className="fa-solid fa-rectangle-xmark" />
              </button></h5>
              </div>
              <div className="col-md-12">
              <div className="card-body text-primary">
                  <label htmlFor="id" className="form-label">
                    ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    placeholder="ID"
                    value={idInputVal}
                    onChange={idChangeH}
                    maxLength={20}
                  />
                  {nameError && <p className="text-danger">{nameErrorMsg}</p>}
                </div>
                <div className="card-body text-primary">
                  <label htmlFor="bookName" className="form-label">
                    Book Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bookName"
                    placeholder="Please enter Book Name"
                    value={nameInputVal}
                    onChange={nameChangeH}
                    maxLength={20}
                  />
                  {nameError && <p className="text-danger">{nameErrorMsg}</p>}
                </div>
                <div className="card-body text-primary">
                  <label htmlFor="author" className="form-label">
                    Author
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    placeholder="Please enter Author's Name"
                    value={authorInputVal}
                    onChange={authorChangeH}
                    maxLength={20}
                  />
                  {authorError && (
                    <p className="text-danger">{authorErrorMsg}</p>
                  )}
                </div>
                <div className="card-body text-primary">
                  <label htmlFor="isbn" className="form-label">
                    ISBN No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="isbn"
                    placeholder="Please enter valid ISBN eg. 007462542X"
                    value={isbnInputVal}
                    onChange={isbnChangeH}
                    onBlur={validateISBN}
                    maxLength={10}
                  />
                  {isbnError && <p className="text-danger">{isbnErrorMsg}</p>}
                </div>
                <div className="card-body text-primary">
                  <label htmlFor="url" className="form-label">
                    Website
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    placeholder="Please enter valid url"
                    value={urlInputVal}
                    onChange={urlChangeH}
                    maxLength={100}
                  />
                  {urlError && <p className="text-danger">{urlErrorMsg}</p>}
                </div>
                <div className="card-body text-primary">
                <button
                type="button"
                className="btn btn-primary"
                onClick={addNewBookH}
              >
                Add New
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewBook;
