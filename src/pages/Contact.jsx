import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import contact from "../assets/data/contact";
import { basicSchema } from "../schemas/Schema";
import { SendEmail } from "../emailApi/emailApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userStateContext } from "../contexts/ContextProvider";
import {Link} from 'react-router-dom';
const Contact = React.memo(function Contact() {
  const [buttonLoading, setButtonLoading] = useState(false);
  const { setResponse, response } = userStateContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      toast,
      setButtonLoading,
      responseCallback: (response) => {
        // Callback function to update response state
        setResponse(response);
      },
    },

    validationSchema: basicSchema,
    onSubmit: (values) => {
      SendEmail(values);

      console.log(response);
      if (response === true) {
        resetForm(
          resetForm({ values: { message: "", phoneNumber: "", email: "" } })
        );
      } else {
        resetForm();
      }
    },
  });

  return (
    <div className="grid sm:grid-cols-2 bg-[#2D2D2D] xl:h-[900px] lg:h-[910px] md:h-[900px]  sm:h-[920px] h-[1450px]  w-full xl:mb-[-80px] lg:mb-[-73px]  sm:mb-[-72px]   relative lg:pt-[50px] xl:pt-0 xl:px-[150px]  ">
      <div className="xl:scale-95 relative lg:top-[60px]  md:top-[140px] sm:top-[60px] top-[60px]  md:pl-5 lg:pl-0">
        <ToastContainer />
        <p className="lg:text-[30px] sm:text-[25px] text-[30px] text-center xl:text-[50px] font-rosario text-[#ff8a3a] font-bold">
          Send a{" "}
          <span className="text-[transparent]  [-webkit-text-stroke:1.5px_#fff]">
            Request
          </span>
        </p>

        <div className="  grid mx-auto relative bottom-[0px]">
          {" "}
          <form
            className="xl:w-[488px] xl:h-[550px] lg:w-[388px] lg:h-[500px] h-[523px]  max-w-screen-lg mt-8 mb-2 w-80 sm:w-90 md:w-96 grid grid-cols-1 mx-auto justify-center bg-[#3d3b3b] transition-[30] sm:rounded-[26px] rounded-[18.8px] sm:left-3 relative lg:left-0"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="flex flex-col gap-4 mb-1 xl:p-8 lg:p-4 md:p-5 sm:p-2 p-5">
              <h6 className="text-white block -mb-3 font-inter lg:text-[14px] md:text-[19px] sm:text-[16px] antialiased font-semibold leading-relaxed tracking-normal ">
                Full Name
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="name"
                  required
                  type="text"
                  placeholder=" "
                  className={`placeholder:text-white bg-[#ffffff4d] placeholder:text-right relative peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200  px-3 py-3 font-inter text-sm font-normal text-white  transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 ${
                    errors.name && touched.name
                      ? "focus:outline-red-400"
                      : "focus:outline outline-0"
                  } disabled:border-0 disabled:bg-blue-gray-50`}
                />
                {errors.name && touched.name ? (
                  <p className="text-red-600">{errors.name}</p>
                ) : (
                  ""
                )}

                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" />
              </div>
              <h6 className="text-white block -mb-3 font-inter md:text-[19px] sm:text-[16px] lg:text-[14px] antialiased font-semibold leading-relaxed tracking-normal ">
                E-mail
              </h6>
              <div className="relative h-11 w-full min-w-[200px] ">
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  required
                  type="email"
                  placeholder="@gmail.com"
                  className={`placeholder:text-white bg-[#ffffff4d] placeholder:text-right relative peer h-full w-full rounded-md   px-3 py-3 font-inter text-sm font-normal text-white    ${
                    errors.email && touched.email
                      ? "focus:outline-red-900 border border-red-700"
                      : "focus:outline outline-0 transition-all focus:border-2 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  disabled:border-0 disabled:bg-blue-gray-50 border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900"
                  } `}
                />{" "}
                {errors.email && touched.email ? (
                  <p className="text-red-600">{errors.email}</p>
                ) : (
                  ""
                )}
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" />
              </div>
              <h6 className="text-white block -mb-3 font-inter lg:text-[14px] md:text-[19px] sm:text-[16px] antialiased font-semibold leading-relaxed tracking-normal ">
                Phone Number
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="phoneNumber"
                  required
                  type="tel"
                  placeholder=""
                  className={`placeholder:text-white bg-[#ffffff4d] placeholder:text-right relative peer h-full w-full rounded-md   px-3 py-3 font-inter text-sm font-normal text-white    ${
                    errors.phoneNumber && touched.phoneNumber
                      ? "focus:outline-red-900 border border-red-700"
                      : "focus:outline outline-0 transition-all focus:border-2 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  disabled:border-0 disabled:bg-blue-gray-50 border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900"
                  } `}
                />{" "}
                {errors.phoneNumber && touched.phoneNumber ? (
                  <p className="text-red-600">{errors.phoneNumber}</p>
                ) : (
                  ""
                )}
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" />
              </div>{" "}
              <h6 className="text-white block -mb-3 font-inter md:text-[19px] sm:text-[16px] lg:text-[14px] antialiased font-semibold leading-relaxed tracking-normal  ">
                Your Request
              </h6>
              <div className="relative w-full min-w-[200px]">
                <textarea
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  id="message"
                  name="message"
                  rows="4"
                  cols="20"
                  placeholder=""
                  type="text"
                  className={`placeholder:text-white bg-[#ffffff4d] placeholder:text-right relative peer h-full w-full rounded-md   px-3 py-3 font-inter text-sm font-normal text-white    ${
                    errors.message && touched.message
                      ? "focus:outline-red-900 border border-red-400"
                      : "focus:outline outline-0 transition-all focus:border-2 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200  disabled:border-0 disabled:bg-blue-gray-50 border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900"
                  } `}
                />{" "}
                {errors.message && touched.message ? (
                  <p className="text-red-600">{errors.message}</p>
                ) : (
                  ""
                )}
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" />
              </div>
            </div>

            <button
              disabled={buttonLoading}
              className={`md:bottom-9 relative bottom-6 mx-auto  lg:w-[220px] sm:w-[170px] w-[150px] sm:h-[44px] h-[40px] bg-[#FF8A3A] text-white mt-6 block  select-none rounded-lg bg-gray-900  px-6 text-center align-middle font-inter text-xs font-bold uppercase shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
              type="submit"
            >
              {buttonLoading ? <p>Sending</p> : <p>Send</p>}
            </button>
          </form>
        </div>
      </div>
      <div className="xl:scale-95 relative top-[-10px] sm:top-[-30px] md:top-0 sm:scale-90 md:scale-100">
        <div className="grid grid-cols-1 lg:space-y-[-20px] xl:space-y-0 space-y-[40px] sm:space-y-[-10px]">
          {contact.map((d) => (
            <>
              <div key={d.id}>
                {d.id === 1 && (
                  <>
                    <p className="sm:text-[25px] text-[25px] xl:right-[1px] lg:text-[30px] lg:top-[80px] md:top-[140px] sm:top-[60px]  lg:right-[74px] sm:right-[74px]  relative text-center xl:text-[39px] font-rosario font-bold text-[transparent]  [-webkit-text-stroke:1.5px_#fff]">
                      {d.topic1}
                    </p>
                    <div className="font-inter lg:text-[17px] lg:top-[100px] sm:top-[90px] md:top-[170px] top-[20px] relative text-white mx-auto justify-center grid xl:left-[50px]  sm:left-0">
                      <div className="grid gap-y-5 ">
                        {" "}
                        {d.icon.map((img) => (
                          <Link
                            to={img.path}
                            target="blank"
                            key={img.id}
                            className={`flex gap-x-4   relative sm:left-0 ${
                              img.info === "sales@altrascientific.com"
                                ? "left-[0px]"
                                : "left-[40px] sm:left-0"
                            }`}
                            rel="noopener noreferrer"
                          >
                            <img src={img.img} className="" />
                            <p>{img.info}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {d.id === 2 && (
                  <div className="relative sm:mt-[100px] z-10 mt-[30px] ">
                    {" "}
                    <p className="text-[25px] sm:text-[25px] lg:top-[60px] sm:top-[40px] md:top-[130px] relative text-center xl:right-[35px] lg:right-[94px] sm:right-[90px]  xl:text-[39px]  lg:text-[30px]  font-rosario font-bold text-[transparent]  [-webkit-text-stroke:1.5px_#fff]">
                      {d.topic2}
                    </p>
                    <div className="font-inter lg:text-[17px] top-[20px] lg:top-[80px] sm:top-[65px] md:top-[150px] relative text-white mx-auto justify-center grid xl:left-[60px] lg:left-[10px] sm:left-[24px]  ">
                      <div className="grid gap-y-5">
                        {" "}
                        {d.iconTwo.map((img) => (
                          <div
                            target="blank"
                            key={img.id}
                            className="flex gap-x-4 z-"
                          >
                            <div className="xl:flex sm:text-nowrap relative xl:left-[105px]  ">
                              <img
                                src={img.img}
                                className="object-none   mx-auto sm:mx-0 relative sm:left-10 xl:left-[-50px] xl:top-[-86px] md:left-5 lg:left-10"
                              />
                              <div className="hidden  xl:scale-90 2xl:scale-100 xl:relative 2xl:right-[-20px] xl:right-2 2xl:space-y-2 xl:space-y-4 ">
                                <p>{img.info2}</p>
                                <a href={img.path} target="blank">
                                  {img.info}
                                </a>
                              </div>
                              <div className="font-inter   xl:left-12 sm:scale-90  lg:scale-105 lg:left-5 lg:top-4  relative mx-auto justify-center grid grid-cols-1 space-y-5 mt-[12px] md:scale-90 right-2 sm:right-0 ">
                                <div className="flex space-x-4  mx-auto justify-center relative left-0 sm:left-3 md:left-6 lg:left-0 xl:left-[-50px]">
                                  {" "}
                                  <p className="xl:right-6 text-nowrap  relative right-4 md:right-10 lg:right-0 ">
                                    {" "}
                                    Registered Office:
                                  </p>
                                  <p className=" relative left-9  sm:left-2 xl:left-9 ">
                                    54,1/1,
                                    <br /> St.Lawrence Road, <br />
                                    Colombo-06,
                                    <br />
                                    Sri Lanka.
                                  </p>
                                </div>
                                <div className=" xl:left-[-50px] flex space-x-3  relative left-0 lg:left-[50px]  ">
                                  {" "}
                                  <p className="text-nowrap relative right-2  lg:right-12 xl:right-[60px]">
                                    {" "}
                                    Operations &
                                    <span className="lg:block hidden xl:hidden"></span>{" "}
                                    Warehouse:
                                  </p>
                                  <p className="sm:right-3  relative md:right-0">
                                    {" "}
                                    452,
                                    <br />
                                    Negombo Road,
                                    <br /> Welisara,
                                    <br />
                                    Ragama.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {d.id === 3 && (
                  <div className=" relative md:top-[70px] lg:top-0  z-0 top-[30px] ">
                    <p className="text-[25px] sm:text-[25px] sm:right-[65px] lg:text-[30px] sm:top-[60px] md:top-[140px]  lg:right-[69px] xl:right-[4px] relative text-center xl:text-[39px] font-rosario font-bold text-[transparent]  [-webkit-text-stroke:1.5px_#fff]">
                      {d.topic3}
                    </p>
                    <div className=" lg:left-[10px]  grid font-inter lg:text-[17px] top-[20px] sm:top-[80px] md:top-[160px] relative text-white mx-auto justify-center  xl:left-[65px]  ">
                      <div className="grid gap-y-5">
                        {" "}
                        {d.iconThree.map((img) => (
                          <Link
                            to={img.path}
                            target="blank"
                            key={img.id}
                            className={`flex gap-x-4  ${
                              img.info === "www.altrascientific.com"
                                ? "relative left-[20px] sm:left-0"
                                : ""
                            } `}
                            rel="noopener noreferrer"
                          >
                            <img
                              src={img.img}
                              className={`${
                                img.info === "@altrascientific"
                                  ? "sm:block hidden "
                                  : ""
                              }`}
                            />
                            <p className={``}>{img.info}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
});
export default Contact;
