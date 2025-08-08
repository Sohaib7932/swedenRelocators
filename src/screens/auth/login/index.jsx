import React, { useEffect } from 'react';
import Navbar from '../../../components/Header/Navbar';
import Banner_Page from '../../../components/Common/Banner_Page';
import Footer from '../../../components/Footer/Footer';
import login_img from '../../../assets/images/login_img.svg';
import Input from '../../../components/Input';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Header from '../../../components/Header_New/Header';
import homeBgImage from "../../../assets/images/bg-image/col-bgimage-1.png";
const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Banner_Page
        highlightText={("Log In")}
        regularText={(
          "Login to your account to make your relocation dream come true!"
        )}
        backgroundImage={homeBgImage}
      />
      <section className=" tw-pt-12">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-5">
              <img src={login_img} className=" tw-w-full" alt="" />
              <p className=" tw-text-gray tw-text-center tw-leading-5">
                Our portal allows you to communicate directly with our team of immigration experts, lawyers who can provide you with guidance & support throughout the relocation & immigration process.
              </p>
            </div>
            <div className="col-md-7 ">
              <div className="row ">
                <div className="col-md-10 mx-auto">
                  <div className=" tw-text-center">
                    <p className=" tw-text-xl p_main  tw-text-gray-dark tw-font-semibold tw-pb-9">Login with</p>
                  </div>
                  <div>
                    <div className=" tw-bg-primary tw-flex tw-items-center tw-justify-around tw-rounded-md tw-py-2.5">
                      <img src="https://swedenrelocators.se/pages/assets/web/images/icons8-email-48.png" alt="" className="" />
                      <p className=" tw-text-white m-0  tw-font-bold tw-text-2xl">EMAIL ID</p>
                      <img src="https://swedenrelocators.se/pages/assets/web/images/icons8-globe-48.png" alt="" className="" />
                    </div>

                    <form>
                      <div className=" row tw-pt-6">
                        <div className="col-md-12">
                          <Input placeholder={'Email Address...'} star={'*'} className={' tw-w-full border tw-py-3.5 tw-px-3 '} label={'Email Address'} />
                        </div>

                        <div className="col-md-12">
                          <Input placeholder={'Enter Password'} star={'*'} className={' tw-w-full border tw-py-3.5 tw-px-3 '} label={'Password'} />
                        </div>
                        <div className=" col-md-12">
                          <div className=" tw-flex tw-justify-between tw-items-center">
                            <div className=" tw-flex tw-gap-2 tw-pt-1  tw-items-center ">
                              <Input type={'checkbox'} className={' tw-w-4  tw-h-4'} />
                              <p className=" tw-text-gray">Remember Password</p>
                            </div>
                            <div>
                              <Link className=" tw-text-black">Forget Password?</Link>
                            </div>
                          </div>
                        </div>
                        <div className="12">
                          <Button label={'sign in'} className={' tw-uppercase tw-mx-auto  tw-text-sm    tw-bg-primary tw-py-3.5  tw-w-full  tw-rounded-lg tw-text-white '} />
                        </div>
                        <div className="col-md-12 tw-text-center">
                          <p className=" tw-text-gray">
                            Don't have an account?{' '}
                            <Link to={'/register'} className=" tw-text-black">
                              Sign Up
                            </Link>{' '}
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
