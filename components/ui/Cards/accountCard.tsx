import React from "react";

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
            <div className="">
              <p className="font-light">Bank:</p>
              <p className="font-medium tracking-tight">
                {(bank_name as string).toUpperCase()}
              </p>
            </div>
            <img
              className="w-9 h-9 rounded-md"
              src={`https://logo.clearbit.com/${bank_name}.com`}
            />
          </div>
          <div className="pt-1">
            <p className="font-light">Total Chequing Balance:</p>
            <p className="font-medium tracking-more-wider">
              ${(total_chequing as Number).toFixed(2)}
            </p>
          </div>
          <div className="pt-1">
            <p className="font-light">Total Savings Balance:</p>
            <p className="font-medium tracking-more-wider">
              ${(total_savings as Number).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* src="https://i.imgur.com/Zi6v09P.png" */}
    </div>
  );
};

export default accountCard;
