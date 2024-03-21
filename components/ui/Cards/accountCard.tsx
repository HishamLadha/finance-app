import React from "react";
import EditAccountButton from "../Buttons/editAccountButton";
import Image from "next/image";

const accountCard = ({ bank_name, total_chequing, total_savings }: any) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="w-96 h-56 m-auto rounded-xl relative shadow-2xl text-white transition-transform transform hover:scale-110">
        <img
          className="relative object-cover w-full h-full rounded-xl"
          src="https://i.imgur.com/kGkSg1v.png"
        />

        <div className="w-full px-8 absolute top-8">
          <div className="flex justify-between">
            <div>
              <p className="font-light">Bank:</p>
              <p className="font-medium tracking-tight">
                {(bank_name as string).toUpperCase()}
              </p>
            </div>
            <Image
              className="w-9 h-9 rounded-md"
              src={`https://logo.clearbit.com/${bank_name}.com`}
              // The width and height get overriden by the width and height in the className above but adding them is a must due to the way next/image works
              width={36}
              height={36}
              alt={`${bank_name} logo`}
            />
          </div>
          <div className="pt-1">
            <p className="font-light">Total Chequing Balance:</p>
            <p className="font-medium tracking-more-wider">
              $
              {new Intl.NumberFormat("en-US", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(total_chequing)}
            </p>
          </div>
          <div className="pt-1">
            <p className="font-light">Total Savings Balance:</p>
            <p className="font-medium tracking-more-wider">
              $
              {new Intl.NumberFormat("en-US", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(total_savings)}
            </p>
          </div>
          <div className="absolute bottom-[-20px] right-7">
            {/* The following functionality does not work yet. To be worked on later..... */}
            <EditAccountButton />
          </div>
        </div>
      </div>

      {/* src="https://i.imgur.com/Zi6v09P.png" */}
    </div>
  );
};

export default accountCard;
