import React from "react";
import StationBox from "./utils/stationbox";
import Link from "next/link";
import Makalah from "./utils/makalah";
import AlatTulis from "./utils/alat-tulis";
import Dokumen from "./utils/dokumen";

export default function HeroSection() {
  return (
    <div>
      <div>
        <div className="container px-4 mx-auto mt-5 2xl:px-36">
          {/* Container pertama */}
          <div className="relative flex h-32 px-4 border rounded-xl sm:h-40 lg:h-56 xl:h-64 2xl:h-72 bg-primary-700 ">
            {/* Container kedua */}
            <div className="absolute flex justify-center h-24 px-4 mx-auto transform -translate-x-1/2 bg-white shadow-sm rounded-xl md:shadow-md lg:h-32 2xl:h-40 2xl:w-2/4 justify-items-center sm:w-4/5 -bottom-10 w-72 left-1/2">
              <div className="grid grid-cols-4 gap-4 md:grid-cols-4 lg:mt-4 2xl:mt-8">
                <Link href="/station">
                  <StationBox />
                </Link>
                <Link href="/alattulis">
                  <AlatTulis />
                </Link>
                <Link href="makalah">
                  <Makalah />
                </Link>
                <Link href="dokumen">
                  <Dokumen />
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-full mt-3 lg:mt-6 lg:mx-5 2xl:mt-12 2xl:mx-16 sm:w-auto">
              <h3 className="font-semibold text-white 2xl:text-2xl">
                Hi, Zakaria Sutomo
              </h3>
              <p className="text-sm text-white 2xl:text-xl">
                Mau ngeprint/ cari alat tulis apa hari ini?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
