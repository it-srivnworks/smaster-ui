import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddNewBook from "./AddNewBook";
import ListBooks from "./ListBooks";

const LibraryHome = () => {
  console.log("--LibraryHome");
  const [libraryNav,setLibraryNav] = useState("ListBooks")


  return (
    <>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0"><i className="fa-solid fa-book"></i> &nbsp;Library</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <a href="#" onClick={()=>{setLibraryNav("ListBooks")}}>
              <div className="info-box">
                <span className="info-box-icon bg-outline-primary elevation-1">
                  <i className="fa-solid fa-list" />
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">
                    <h4>Books List</h4>
                  </span>
                  <span className="info-box-desc">
                    List of All Books
                  </span>
                </div>
              </div>
              </a>  
            </div>
            <div className="col-sm-2">
            <a href="#" onClick={()=>{setLibraryNav("AddNewBook")}}>
              <div className="info-box">
                <span className="info-box-icon bg-outline-info elevation-1">
                  <i className="fa-solid fa-plus"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">
                    <h4>Add New</h4>
                  </span>
                  <span className="info-box-desc">
                    Add New Entry
                  </span>
                </div>
              </div>
              </a>
            </div>
            <div className="col-sm-2">
              <div className="info-box"></div>
            </div>
            <div className="col-sm-2">
              <div className="info-box"></div>
            </div>
            <div className="col-sm-2">
              <div className="info-box"></div>
            </div>
            <div className="col-sm-2">
              <div className="info-box"></div>
            </div>
          </div>
          <div className="row">
          {libraryNav == "ListBooks" && <ListBooks></ListBooks>}
          {libraryNav == "AddNewBook" && <AddNewBook></AddNewBook>}
          </div>
        </div>
      </section>
    </>
  );
};

export default LibraryHome;
