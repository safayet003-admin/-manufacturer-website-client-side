import React from 'react';
import { RiFlagLine } from "@react-icons/all-files/ri/RiFlagLine";
import { VscTools } from "@react-icons/all-files/vsc/VscTools";
import { IoIosPeople } from "@react-icons/all-files/io/IoIosPeople";
import { BiLike } from "@react-icons/all-files/bi/BiLike";
import bg from '../../../../Images/bg.png';
import CountUp from 'react-countup';
const BusinessSumary = () => {
    return (
        <div
            style={{
                background: `url(${bg})`
            }}
            className="my-10]">
            <h3 className="text-6xl text-success font-normal font-serif text-center py-5 ">MILLION BUSINESS TRUST US </h3>
            <h3 className="text-3xl text-center text-black">TRY TO UNDERSTAND USER EXPECTATION </h3>
            <div className='flex justify-center items-center lg:my-2'>
                <hr className='w-20 h-1 border-0 rounded bg-gradient-to-r from-cyan-500 to-blue-500 m-5' />
                <hr className='w-16 h-1 border-0 rounded bg-gradient-to-r from-cyan-500 to-blue-500 m-5' />
                <hr className='w-8 h-1 border-0 rounded bg-gradient-to-r from-cyan-500 to-blue-500 m-5' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>

                <div className="card max;w-lg">
                    <div className="card-body items-center text-center">
                        <span className='text-success text-7xl'><VscTools /></span>
                        <h2 className="card-title text-5xl">
                            <CountUp end={782} />+

                        </h2>

                        <p className="text-2xl text-success">Motor Bike Parts</p>
                    </div>
                </div>
                <div className="card max;w-lg">
                    <div className="card-body items-center text-center">
                        <span className='text-success text-7xl'><RiFlagLine /></span>
                        <h2 className="card-title text-5xl">
                            <CountUp end={21} />+
                        </h2>
                        <p className="text-2xl text-success">countries</p>
                    </div>
                </div>
                <div className="card max;w-lg">
                    <div className="card-body items-center text-center">
                        <span className='text-success text-7xl'><IoIosPeople /></span>
                        <h2 className="card-title text-5xl">
                            <CountUp end={550} />+
                        </h2>
                        <p className="text-2xl text-success">Customer Service</p>
                    </div>
                </div>
                <div className="card max;w-lg">
                    <div className="card-body items-center text-center">
                        <span className='text-success text-7xl'><BiLike /></span>
                        <h2 className="card-title text-5xl">
                            <CountUp end={1000} />+
                        </h2>
                        <p className="text-2xl text-success">Review</p>
                    </div>
                </div>

            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl  mx-12 mt-7">

                <div className="card-body grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className='me-5'>
                        <h2 className="card-title text-3xl text-bold text-primary "> Have any question about our product?</h2>
                        <p className='mt-3 text-1xl text-black'>Please don't feel shy to contact us.😊</p>
                    </div>
                    <div className="card-actions justify-center items-center">
                        <button className="btn btn-success w-48 text-white text-bold">Any Questions.</button>
                        <button className="btn bg-primary border-0 w-48 font-bold">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSumary;