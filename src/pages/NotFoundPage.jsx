import React from "react";

import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-medioum font-bold text-center">
          Your Pages are not Found
        </h2>
        <p className="text-base font-medium text-center px-2">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>

        <Link to='/' className='bg-black flex items-center justify-center text-slate-100 w-44 h-12 rounded text-base font-semibold hover:text-white duration-200 hover:bg-orange-600'>Back to Home</Link>
      </div>
    </div>
  );
}
