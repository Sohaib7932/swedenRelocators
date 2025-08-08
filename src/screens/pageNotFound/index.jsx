import React from "react";
import Button from "../../components/Button";
const PageNotFound = () => {
  return (
    <>
      {/* <Navbar /> */}

      <section className=" tw-mx-auto tw-h-screen tw-text-center">
        <div className=" tw-text-[250px] tw-font-bold">
          4<pan className=" tw-text-blue ">0</pan>4
        </div>
        <h1>OOPS! Nothing Was Found</h1>
        <p className=" tw-text-gray">
          Oops! it could be you or us, there is no page here. It might have been
          moved or deleted.Back To Home
        </p>
        <Button
          onClick={() => window.history.back()}
          className={
            " tw-bg-blue tw-rounded-md tw-py-4 tw-px-8 tw-text-white tw-mx-auto"
          }
          label={"Go Back To Home"}
        />
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default PageNotFound;
