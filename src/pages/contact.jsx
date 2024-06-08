import React from 'react'
import Navbar from "../components/Navbar";


const Contact = () => {
  return (
    <>
      <div className="text-center h-[300px] pt-36">
        <p className="font-bold text-3xl">Contact Us</p>
        <p className="pt-4 font-semibold">How can we be of service to you</p>
      </div>
      <div className="flex flex-row justify-center space-x-5 ">
        <div className="bg-gray-400 border border-gray-400 shadow-md w-[470px]">
          <p>General Inquiries</p>
        </div>
        <div className="bg-gray-400 border border-gray-400 shadow-md w-[470px]">
          <p>HQ Address</p>
        </div>
      </div>
      <div className="text-center pt-36">
        <p className="font-bold text-3xl">Message us today</p>
        <p className="pt-4 font-semibold">How can we be of service to you</p>
      </div>
      <div className="mx-32 my-10 shadow border">
        <div className="flex flex-row justify-between pt-14 pr-14 pl-14">
          <div className="space-y-2">
            <div>
              <label className="text-xl">Your Name </label>
            </div>
            <div>
              <input
                placeholder="Please enter your name"
                required
                // value={form.name}
                // onChange={(e) => updateForm("name", e.target.value)}
                className="border border-gray-400  rounded p-5 w-[400px]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <label className="text-xl">Contact </label>
            </div>
            <div>
              <input
                placeholder="Please enter contact info"
                required
                // value={form.contact}
                // onChange={(e) => updateForm("contact", e.target.value)}
                className="border border-gray-400  rounded p-5 w-[400px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between px-14 pt-5">
          <div className="space-y-2">
            <div>
              <label className="text-xl">Email </label>
            </div>
            <div>
              <input
                placeholder="Please provide valid email address"
                required
                // value={form.name}
                // onChange={(e) => updateForm("email", e.target.value)}
                className="border border-gray-400  rounded p-5 w-[400px]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <label className="text-xl">Purpose</label>
            </div>
            <div>
              <select
                required
                // value={form.purpose}
                // onChange={(e) =>
                //   setForm({ ...form, purpose: e.target.value })
                // }
                className="border border-gray-400 rounded p-2 w-[400px] h-[65px]"
              >
                <option value="">Select an Option</option>
                <option value="OPTIONA">OptionA</option>
                <option value="OPTIONB">OptionB</option>
                <option value="OPTIONC">OptionC</option>
              </select>
            </div>
          </div>
        </div>
        <div className="pl-14 pr-14 pt-5 space-y-2">
          <div className="">
            <label className="text-xl">Message</label>
          </div>
          <div>
            <input
              // placeholder="Write message here..."
              required
              // value={form.contact}
              // onChange={(e) => updateForm("contact", e.target.value)}
              className="border border-gray-400  rounded  w-full h-72"
            />
          </div>
        </div>
        <div className="pt-7 pr-14 pb-14 flex justify-end ">
          <button
            className="border border-gray-400 rounded py-4 px-12 bg-[#1FBA4A] text-white"
            // onClick={}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact
