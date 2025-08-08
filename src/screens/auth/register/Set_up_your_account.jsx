import React, { useEffect } from 'react';
import Navbar from '../../../components/Header/Navbar';
import Banner_Page from '../../../components/Common/Banner_Page';
import Footer from '../../../components/Footer/Footer';
import individuals from '../../../assets/images/individual.svg';
import Company from '../../../assets/images/company.svg';
import Partners from '../../../assets/images/partner.svg';
import Input from '../../../components/Input';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

import Header from '../../../components/Header_New/Header';
const Set_up_your_account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Banner_Page title={'Setup Your Account - Sign Up'} />
      <section className=" tw-pt-40">
        <div className="container py-5">
          <div className=" row  tw-items-center ">
            <div className="col-md-6">
              <h2>Sign Up - Setup your account</h2>
            </div>
            <div className="col-md-6 tw-text-end">
              <p className=" tw-text-gray">
                {' '}
                Already have an account?{' '}
                <Link className=" tw-text-black" to={'/login'}>
                  login
                </Link>{' '}
              </p>
            </div>
          </div>

          <div className="row g-5 tw-py-9">
            <div className="col-md-4">
              <div className=" card border-0 tw-text-center">
                <img src={individuals} alt="" />
                <p className=" tw-text-gray">Sign up as a private individual if you are seeking services for yourself or any of your family members.</p>
                <Button Icons={<i class="fa fa-user  tw-text-sm" aria-hidden="true"></i>} label={'Private'} className={' tw-text-blue   tw-mt-8 tw-font-semibold tw-text-lg hover:tw-bg-blue tw-py-2.5 hover:tw-text-white'} />
              </div>
            </div>
            <div className="col-md-4">
              <div className=" card border-0 tw-text-center">
                <img src={Company} alt="" />
                <p className=" tw-text-gray">Sign up as an employer or company if you are looking to hire someone and need immigration and relocation services.</p>
                <Button Icons={<i class="fa fa-building  tw-text-sm" aria-hidden="true"></i>} label={'Businesses'} className={' tw-text-blue tw-mt-8  tw-font-semibold tw-text-lg hover:tw-bg-blue tw-py-2.5 hover:tw-text-white'} />
              </div>
            </div>
            <div className="col-md-4">
              <div className=" card border-0 tw-text-center">
                <img src={Partners} alt="" />
                <p className=" tw-text-gray">Sign up as a Partner if you are interested in collaborating with us. This could include lawyers, law firms, or any other individuals or companies with expertise in this industry.</p>
                <Button Icons={<i class="fa fa-users tw-text-sm" aria-hidden="true"></i>} label={'Partners'} className={' tw-text-blue  tw-font-semibold tw-text-lg  hover:tw-bg-blue tw-py-2.5 hover:tw-text-white'} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Set_up_your_account;
