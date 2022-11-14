import React, { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
import useHttpGETParam from "../../../hooks/common/useHttpGETParam";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { initData, validationCfg } from "./StudentData";
import useHttpPOST from "../../../hooks/common/useHttpPOST";
import useHttpGETParamBytes from "../../../hooks/common/useHttpGETParamBytes";

const StudentDetails = () => {
  console.log("StudentDetails");
  const userEmail = sessionStorage.getItem("userEmail");
  const { sendGETParamReq: getUserDetails } = useHttpGETParam();
  const { sendGETParamReq: getImageData } = useHttpGETParamBytes();
  const { sendPOSTReq: postSendVal } = useHttpPOST();
  const [respComplete, setRespComplete] = useState(true);

  const [disable, setDisable] = useState(true);
  const [dob, setDob] = useState("01-Jan-2000");
  const [profImage, setProfImage] = useState([]);
  const [disablePic, setDisablePic] = useState(true);

  const formOptions = { resolver: yupResolver(validationCfg) };
  formOptions.defaultValues = initData;
  const { register, handleSubmit, reset, setValue, getValues, formState } =
    useForm(formOptions);
  const { errors } = formState;

  const postRespFunc = () => {
    setRespComplete(true);
    setDisable(true);
  };

  const processResp = (statusCode, data) => {
    setRespComplete(true);
    reset(data);
    setDob(data.dob);
  };

  const processRespImage = (statusCode, data) => {
    const imageObjectURL = URL.createObjectURL(data);
    setProfImage(imageObjectURL);
  };
  function datetoStr(d) {
    let dateArr = d.toString().split(" ");
    let newDateStr = dateArr[2] + "-" + dateArr[1] + "-" + dateArr[3];
    return newDateStr;
  }

  const changeDOB = (d) => {
    let newD = datetoStr(d);
    setValue("dob", newD);
    setDob(newD);
  };

  const enablePicEdit = () => {
    setDisablePic(false);
  };

  const uploadPic = () => {};

  function onSubmit(data) {
    setRespComplete(false);
    let url =
      "http://localhost:8080/smaster-home/users/students/updateNewStudentData";
    postSendVal(url, data, postRespFunc);
  }

  const loadData = () => {
    setRespComplete(false);
    const url =
      "http://localhost:8080/smaster-home/users/students/getStudentDetials";
    getUserDetails(url, { userEmail: userEmail }, processResp);
  };

  const loadImage = () => {
    const url =
      "http://localhost:8080/smaster-home/users/students/getProfilePic";
    getImageData(url, { userEmail: userEmail }, processRespImage);
  };

  useEffect(() => {
    loadData();
    loadImage();
  }, []);

  console.log("-----" + profImage);
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right"></ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="overlay-wrapper">
              {!respComplete && (
                <div className="overlay">
                  <i className="fas fa-3x fa-sync-alt fa-spin" />
                  <div className="text-bold pt-2">Updating...</div>
                </div>
              )}
              <div className="row">
                <div className="col-md-3">
                  <div className="card card-primary card-outline">
                    <div className="card-body box-profile">
                      {!disablePic && (
                        <div className="text-right">
                          <a className="btn btn-lg" onClick={uploadPic}>
                            <i className="fas fa-edit" />
                          </a>
                        </div>
                      )}
                      <div className="text-center">
                        <img
                          className="profile-user-img img-fluid img-circle"
                          src={profImage}
                          alt="User"
                          onMouseEnter={enablePicEdit}
                        />
                      </div>
                      <div>
                        <h3 className="profile-username text-center">
                          {getValues("firstName")}&nbsp;{getValues("lastName")}
                        </h3>
                        <p className="text-muted text-center">Student</p>
                        <hr />
                        <div className="card-body">
                          <div className="form-group">
                            <strong>
                              <i className="fa-solid fa-envelope" />{" "}
                              &nbsp;&nbsp; Email
                            </strong>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="email"
                              defaultValue={getValues("userEmail")}
                              readOnly
                            />
                          </div>
                          <div className="form-group">
                            <strong>
                              <i className="fa-regular fa-calendar-days" />{" "}
                              &nbsp;&nbsp; Date of Birth
                            </strong>
                            <DatePicker
                              wrapperClassName="datePicker"
                              dateFormat="dd-MMM-yyyy"
                              selected={new Date(dob)}
                              onChange={(d) => changeDOB(d)}
                              disabled={disable}
                            />
                          </div>

                          <div className="form-group">
                            <strong>
                              <i className="fa-regular fa-calendar-days" />{" "}
                              &nbsp;&nbsp; Date of Joining
                            </strong>
                            <DatePicker
                              wrapperClassName="datePicker"
                              dateFormat="dd-MMM-yyyy"
                              selected={new Date(getValues("inDate"))}
                              //onChange={(d) => changeInDate(d)}
                              disabled={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-row card-primary">
                    <div className="card-header">
                      <h6 className="card-title">
                        <strong>Additonal Info</strong>
                      </h6>
                      <div className="card-tools">
                        {disable && (
                          <button
                            type="button"
                            className="btn btn-block btn-primary btn-sm"
                            onClick={() => setDisable(false)}
                          >
                            Edit
                          </button>
                        )}
                        {!disable && (
                          <button
                            type="submit"
                            className="btn btn-block btn-primary btn-sm"
                          >
                            Save
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <strong>
                          <i className="fa-solid fa-mobile-retro" />
                          &nbsp;&nbsp; Mobile
                        </strong>
                        <input
                          type="text"
                          className="form-control"
                          disabled={disable}
                          {...register("mobile")}
                        />
                        {errors.mobile != null && (
                          <code className="text-danger">
                            {errors.mobile?.message}
                          </code>
                        )}
                      </div>
                      <div className="form-group">
                        <strong>
                          <i className="fa-solid fa-location-dot" />
                          &nbsp;&nbsp; Address
                        </strong>
                        <textarea
                          className="form-control"
                          rows={2}
                          disabled={disable}
                          {...register("primaryAddress.addressLine01")}
                        />
                        {errors.primaryAddress != null && (
                          <code className="text-danger">
                            {errors.primaryAddress.addressLine01?.message}
                          </code>
                        )}
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <strong>
                              <i className="fa-solid fa-location-dot" />
                              &nbsp;&nbsp; City
                            </strong>
                            <input
                              type="text"
                              className="form-control"
                              disabled={disable}
                              {...register("primaryAddress.city")}
                            />
                          </div>
                          {errors.primaryAddress != null && (
                            <code className="text-danger">
                              {errors.primaryAddress.city?.message}
                            </code>
                          )}
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <strong>
                              <i className="fa-solid fa-location-dot" />
                              &nbsp;&nbsp; State
                            </strong>
                            <input
                              type="text"
                              className="form-control"
                              disabled={disable}
                              {...register("primaryAddress.state")}
                            />
                          </div>
                          {errors.primaryAddress != null && (
                            <code className="text-danger">
                              {errors.primaryAddress.state?.message}
                            </code>
                          )}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <strong>
                              <i className="fa-solid fa-location-dot" />
                              &nbsp;&nbsp; Country
                            </strong>
                            <input
                              type="text"
                              className="form-control"
                              disabled={disable}
                              {...register("primaryAddress.country")}
                            />
                          </div>
                          {errors.primaryAddress != null && (
                            <code className="text-danger">
                              {errors.primaryAddress.country?.message}
                            </code>
                          )}
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <strong>
                              <i className="fa-solid fa-location-dot" />
                              &nbsp;&nbsp; PostCode
                            </strong>
                            <input
                              type="text"
                              className="form-control"
                              disabled={disable}
                              {...register("primaryAddress.postCode")}
                            />
                            {errors.primaryAddress != null && (
                              <code className="text-danger">
                                {errors.primaryAddress.postCode?.message}
                              </code>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <strong>
                          <i className="fa-sharp fa-solid fa-user" />
                          &nbsp;&nbsp; Primary Guardian Email
                        </strong>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            disabled={disable}
                            {...register("primGuardianEmail")}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <i className="fas fa-check"></i>
                            </span>
                          </div>
                        </div>
                        {errors.primGuardianEmail != null && (
                          <code className="text-danger">
                            {errors.primGuardianEmail?.message}
                          </code>
                        )}
                      </div>
                      <div className="form-group">
                        <strong>
                          <i className="fa-sharp fa-solid fa-user" />
                          &nbsp;&nbsp;Secondary Guardian Email
                        </strong>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            disabled={disable}
                            {...register("secnGuardianEmail")}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <i className="fas fa-check"></i>
                            </span>
                          </div>
                        </div>
                        {errors.secnGuardianEmail != null && (
                          <code className="text-danger">
                            {errors.secnGuardianEmail?.message}
                          </code>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default StudentDetails;
