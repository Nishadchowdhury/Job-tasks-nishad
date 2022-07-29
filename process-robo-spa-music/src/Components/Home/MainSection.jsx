import React from "react";
import nameAndLogo from "../../Utils/IMG/NameAndLogo.png";
import "./MainSection.css";
import bg_artist from "../../Utils/IMG/bg-artist.png";
import Taylor from "../../Utils/IMG/taylor_prev_ui.png";
import ed_mu from "../../Utils/IMG/mu_ed-1.png";
import ty_mu from "../../Utils/IMG/mu_ty-1.png";
import sebastian from "../../Utils/IMG/auth-secastian.png";
import edPerfact from "../../Utils/IMG/ed-perfact.jpg";

const MainSection = () => {
  return (
    <div className="bg-white m-14 h-[84vh] w-full rounded-[30px] overflow-hidden ">
      <div className="flex bg-slate-500 rounded-[30px]">
        <div className=" min-h-[84vh] bg-[#FFFFFF] w-1/4 overflow-auto ok  ">
          <div className="h-24  p-6">
            <div className="flex justify-between">
              {" "}
              <div className="flex gap-2">
                <i className="fa-solid fa-circle text-[#E60000] "></i>
                <i className="fa-solid fa-circle text-[#FDB002] "></i>
                <i className="fa-solid fa-circle text-[#059A07] "></i>
              </div>
              <div>
                <i class="fa-solid fa-table-list text-[#7a728b] "></i>
              </div>
            </div>

            <div className="my-5">
              <img className="w-[180px]" src={nameAndLogo} alt="" />
            </div>

            <div className="flex flex-col">
              <span className="my-2">
                {" "}
                <i className="fa-solid fa-house  px-4 text-[#E60000] "></i>{" "}
                <span className=" pl-2 text-[#7a728b] ">Home</span>{" "}
              </span>
              <span className="my-2 text-[#7a728b] ">
                {" "}
                <i className="fa-solid fa-chart-simple px-4  "></i> <span className=" pl-2 ">Trends</span>{" "}
              </span>
              <span className="my-2 text-[#7a728b] ">
                {" "}
                <i className="fa-solid fa-music px-4  "></i> <span className=" pl-2 ">Library</span>{" "}
              </span>
            </div>
            <span className="text-[#7a728b] px-4 my-2 text-xs">Discover</span>

            <div className="flex flex-col">
              <span className="my-2 text-[#7a728b] ">
                {" "}
                <i className="fa-solid fa-house  px-4 text-[#7a728b]"></i>{" "}
                <span className=" pl-2 ">Discover Weekly</span>{" "}
              </span>
              <span className="my-2 text-[#7a728b] ">
                {" "}
                <i className="fa-solid fa-chart-simple px-4  "></i> <span className=" pl-2 ">Made For You</span>{" "}
              </span>
              <span className="my-2 text-[#7a728b] ">
                {" "}
                <i className="fa-solid fa-music px-4  "></i> <span className=" pl-2 ">Daily Mix</span>{" "}
              </span>
            </div>
            <span className="text-[#7a728b] px-4 my-2 text-xs">Your collection</span>

            <div className="flex flex-col">
              <span className="my-2 text-[#7a728b] ">
                {" "}
                <i className="fa-solid fa-heart  px-4  "></i> <span className=" pl-2 ">Liked Songs</span>{" "}
              </span>
              <span className="my-2 text-[#7a728b] ">
                {" "}
                <i className="fa-solid fa-user-clock px-4  "></i> <span className=" pl-2 ">Favorite Artist</span>{" "}
              </span>
              <span className="my-2 text-[#7a728b] ">
                {" "}
                <i className="fa-solid  fa-compact-disc px-4  "></i> <span className=" pl-2 ">Playlist</span>{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="w-px bg-gray-200 "></div>

        {/* 2 */}

        <div className=" min-h-[84vh] bg-[#fcfcfd] w-2/4 relative ">
          <div className="h-20 mt-3 flex items-center">
            {" "}
            <div className="w-[140px] h-full flex justify-between items-center px-6 pl-10 ">
              {" "}
              <i class="fa-solid fa-chevron-left"></i> <i class="fa-solid fa-chevron-right text-[#9590a03a] "></i>{" "}
            </div>
            <form className="w-full mr-10" action="">
              <div class="   w-full mr-10">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class=" p-2 bg-[#F2F3F7] text-[#7a728b] h-10 w-full rounded-3xl focus:text-black focus:outline-none   pl-10 "
                  placeholder="Taylor Swift"
                  required=""
                />
              </div>{" "}
            </form>
          </div>
          <div
            style={{
              backgroundImage: "url(" + bg_artist + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className=" relative h-40 rounded-3xl mx-10 mt-8  "
          >
            <img className="absolute w-[23%] -mt-[75px] right-10 bottom-0 " src={Taylor} alt="" />

            <div className=" text-white absolute left-0 h-full flex flex-col justify-center pl-10">
              <p className="text-xs">
                {" "}
                <i class="fa-solid fa-bahai text-blue-600 "></i> <span className="text-white">Verified Artist</span>
              </p>
              <p className="text-5xl font-bold  ">Taylor Swift</p>
              <p className="text-sm mt-4">119M monthly listeners</p>
            </div>
          </div>
          <div>
            {" "}
            <span className=" mx-10  text-gray-700 font-mono font-semibold my-3 inline-block ">Popular</span>
            <button className=" mx-10 float-right text-gray-400 text-xs  my-3 inline-block ">See all</button>
          </div>
          {/* table of songs */}

          <div class=" overflow-auto">
            <table class="w-full text-sm overflow-auto text-left text-gray-500  border-gray-400 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase  dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    #
                  </th>
                  <th scope="col" class="py-3 px-6">
                    TITLE
                  </th>
                  <th scope="col" class="py-3 px-6">
                    PLAYING
                  </th>
                  <th scope="col" class="py-3 px-6">
                    TIME
                  </th>
                  <th scope="col" class="py-3 px-6">
                    ALBUM
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-auto   ">
                <tr class="bg-[#cccccc] text-gray-400  border-l-4 border-red-600  ">
                  <th
                    scope="row"
                    class="py-1 px-1 pl-6 font-medium flex justify-between w-[100px] items-center h-12 text-gray-600"
                  >
                    <i class="fa-solid fa-music"></i> <img className="h-full" src={ed_mu} alt="" />{" "}
                  </th>
                  <td class="py-4 px-6 text-sm ">Song Name(more info)</td>
                  <td class="px-6 py-4  "> 50000</td>
                  <td class="py-4 px-6">3:40</td>
                  <td class="py-4 px-6">1998</td>
                </tr>{" "}
                <tr class="bg-white  ">
                  <th
                    scope="row"
                    class="py-1 px-1 pl-6 font-medium  flex justify-between w-[100px] items-center h-12 text-gray-600"
                  >
                    2 <img className="h-full" src={ty_mu} alt="" />{" "}
                  </th>
                  <td class="py-4 px-6 text-sm ">Song Name(more info)</td>
                  <td class="px-6 py-4  "> 50000</td>
                  <td class="py-4 px-6">3:40</td>
                  <td class="py-4 px-6">1998</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className=" h-24 absolute bottom-0 w-full border-t border-gray-300 ">
            <div className="flex  justify-between items-center h-1/2 pl-16 pr-8 text-gray-600  ">
              <div className=" flex w-14 justify-between ">
                <i class="fa-solid fa-list"></i> <i class="fa-brands fa-chromecast"></i>{" "}
              </div>
              <div className="flex gap-4 items-center ">
                <i class="  fa-solid fa-shuffle"></i>
                <i class="text-xl  fa-solid fa-caret-left"></i>
                <i class="text-xl  fa-solid fa-circle-pause scale-150   "></i>
                <i class="text-xl  fa-solid fa-caret-right"></i>
                <i class="  fa-solid fa-repeat"></i>
              </div>
              <div className="flex items-center  gap-3 w-32 ">
                <i class="fa-solid fa-volume-off"></i>

                <input
                  id="volInput"
                  type="range"
                  // value="0"
                  min="0"
                  max="100"
                  name=""
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  className="w-20"
                />

                <i class="fa-solid fa-volume-high"></i>
              </div>
            </div>

            <div className="flex items-center justify-between w-full h-1/2 ">
              <div className="w-[10%] flex items-center justify-center ">01:18</div>
              <div className="w-[80%] flex  items-center justify-center">
                {" "}
                <input type="range" min="0" max="100" name="" id="" className="w-full music_range  " />{" "}
              </div>
              <div className="w-[10%] flex items-center justify-center ">03:18</div>
            </div>
          </div>
        </div>

        <div className="w-px bg-gray-200  "></div>

        <div className=" min-h-[84vh]  px-8 bg-[#fcfcfd] w-1/4">
          <div className="h-20 mt-3 w-full flex items-center justify-between ">
            <img src={sebastian} className="rounded-full w-12 " alt="" />

            <div
              className="ml-4"
              style={{
                width: "inherit",
              }}
            >
              <span className="block">Sebastian Vettel </span>
              <span className="flex items-center text-gray-400  ">
                <span className="text-xs"> Premium Member </span>
                <i class="fa-solid fa-circle scale-[0.2] -mb-1  -ml-1 -mr-1 "></i>{" "}
                <i class="fa-solid fa-award text-amber-400"></i>
              </span>
            </div>

            <div className=" text-gray-500  ">
              {" "}
              <i class="fa-solid fa-bell text-2xl relative">
                {" "}
                <span className="absolute text-[8px] -top-1 left-[11px]   ">
                  {" "}
                  <i class="fa-solid fa-circle rounded-full bg-red-500 text-red-500 border-[3px] scale-105 border-white "></i>
                </span>{" "}
              </i>
            </div>
          </div>

          <div className=" w-full mb-3 flex justify-between ">
            <div>
              <strong>Recently played</strong>
            </div>
            <div>
              <span className="text-xs text-gray-500">See All</span>
            </div>
          </div>

          <div className="w-full mb-4 ">
            <div className="h-12 flex items-center justify-between ">
              <img className="h-full" src={ty_mu} alt="" />

              <p className="flex-grow ml-3 ">
                <span className="block">Blank Space</span>
                <span className="block text-gray-400 text-sm ">Taylor Swift</span>
              </p>
              <span className="text-xs text-gray-400">12min ago</span>
            </div>
          </div>
          <div className="w-full mb-4 ">
            <div className="h-12 flex items-center justify-between ">
              <img className="h-full" src={ed_mu} alt="" />

              <p className="flex-grow ml-3 ">
                <span className="block">Blank Space</span>
                <span className="block text-gray-400 text-sm ">Taylor Swift</span>
              </p>
              <span className="text-xs text-gray-400">12min ago</span>
            </div>
          </div>
          <div className="w-full mb-4 ">
            <div className="h-12 flex items-center justify-between ">
              <img className="h-full" src={ty_mu} alt="" />

              <p className="flex-grow ml-3 ">
                <span className="block">Blank Space</span>
                <span className="block text-gray-400 text-sm ">Taylor Swift</span>
              </p>
              <span className="text-xs text-gray-400">12min ago</span>
            </div>
          </div>

          <div>
            <div className="h-[200px] overflow-hidden flex items-center rounded-lg">
              <img className="w-full " src={edPerfact} alt="edPerfact" />
            </div>

            <div className="flex justify-between items-center">
              <div className="mt-2">
                <strong className="block  ">Perfect</strong>
                <span className="block text-gray-400 text-xs">Ed Sheeran</span>
              </div>
              <div>
                {" "}
                <i className="fa-solid fa-heart text-red-500 text-lg   "></i>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
