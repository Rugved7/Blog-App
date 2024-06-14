import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Copyright © 2024. All Rights Reserved by Rugved.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Address
              </h3>
              <ul>
                <li className="mb-4">Pune, Maharashtra, IN</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Upcoming Features
              </h3>
              <ul>
                <li className="mb-4">Beautiful interface</li>
                <li className="mb-4">Membership plans</li>
                <li>Adding music features</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                My Information
              </h3>
              <ul>
                <li className="mb-4">Made by Rugved, Full Stack Developer</li>
                <li>
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://drive.google.com/file/d/16KLsTa_BvCVdrMwYx3kmygjYakZ_SOcE/view?usp=drive_link"
                    target="_blank/"
                  >
                    Rugved CV
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
