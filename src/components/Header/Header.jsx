import React from "react";

const Header = () => {
  return (
    <header>
      <section className="container mx-auto px-4 flex flex-col gap-4 my-8 lg:px-40">
        <h1 className="text-5xl font-bold text-[#BFA065] text-center lg:text-6xl">
          Lower sugar recipes
        </h1>
        <p className="text-slate-800 text-center md:px-12">
          As we go about our hectic, busy days, it can be very easy to resort to
          a sugary snack midway through the afternoon to keep your energy levels
          elevated.
        </p>
      </section>
    </header>
  );
};

export default Header;
