import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BiMap } from "react-icons/bi";
const ContactMe = () => {
  return (
    <div id="contact" className="max-w-5xl mx-auto my-32">
      <div className="mb-16 text-3xl max-sm:text-center">
        <h1 className="text-blue-500 font-bold">CONTACT</h1>
        <p className="font-bold">Don't be shy! Hit me up! 👇</p>
      </div>
      <div className="flex flex-wrap gap-12 mt-10">
        <div className="flex gap-5">
          <span className="p-3 rounded-full shadow-xl">
            <BiMap style={{ color: "#147efb" }} size="2rem" />
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Location</span>
            <span className="text-xl text-zinc-500">Meerut , India</span>
          </div>
        </div>
        <div>
          <div className="flex gap-5 items-centerem">
            <span className="p-3 rounded-full shadow-xl">
              <HiOutlineMail style={{ color: "#147efb" }} size="2rem" />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-bold">Mail</span>
              <a
                className="text-zinc-500 hover:text-blue-500"
                href="mailto:tusharKhatri1001@gamil.com"
              >
                <span className="text-xl ">tusharKhatri1001@gamil.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
