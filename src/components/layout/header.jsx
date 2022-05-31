import { memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "./../../contexts/AppContext";
function Header() {
  const [OPanle, setOPanle] = useState(false);
  let appContext = useContext(AppContext);
  return (
    <header className="w-full">
      <nav
        id="header"
        className="max-w-full z-30 top-0 py-1 mx-5 rounded-b-3xl bg-white shadow shadow-indigo-200"
      >
        <div className="w-full container mx-auto flex flex-row-reverse flex-wrap items-center justify-between mt-0 px-6 py-3">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block"
            onClick={() => {
              setOPanle(!OPanle);
            }}
          >
            <svg
              className="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
            >
              <title>منو</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li>
                  <a href="/products">
                    <span className="inline-block no-underline hover:text-black py-2 px-5 my-2 mx-4 rounded-3xl hover:ring-2 hover: hover:ring-indigo-100 hover:bg-indigo-50">
                      محصولات
                    </span>
                  </a>
                </li>
                <li>
                  <Link to="/about">
                    <span className="inline-block no-underline hover:text-black py-2 px-5 my-2 mx-4 rounded-3xl hover:ring-2 hover: hover:ring-indigo-100 hover:bg-indigo-50">
                      درباره ما
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="order-1 md:order-2">
            <a href="/">
              <div className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                <svg
                  className="fill-current text-gray-800 mr-2 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                </svg>
                پوشاک نعمتی
              </div>
            </a>
          </div>
          <div
            className="order-2 md:order-3 flex items-center space-x-3"
            id="nav-content"
          >
            <Link to="/cart">
              <svg
                className="h-6 w-6 text-black cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </Link>
            {appContext.state.auth ? (
              <Link
                className="pl-3 inline-block no-underline mx-1  cursor-pointer"
                to="/user-account"
              >
                <svg
                  className="h-8 w-8 text-black hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            ) : (
              <Link
                className="pl-3 inline-block no-underline mx-1  cursor-pointer"
                to="/login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-black hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </nav>
      {OPanle ? (
        <div
          className="flex mx-1 max-w-fit shadow-xl rounded-3xl shadow-sky-100"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <a href="/products">
                  <span className="inline-block no-underline hover:text-black hover:underline py-2 px-5 my-2 mx-4 rounded-3xl hover:shadow-sm hover: hover:shadow-indigo-100 hover:bg-indigo-50">
                    محصولات
                  </span>
                </a>
              </li>
              <li>
                <a href="/about">
                  <span className="inline-block no-underline hover:text-black hover:underline py-2 px-5 my-2 mx-4 rounded-3xl hover:shadow-sm hover: hover:shadow-indigo-100 hover:bg-indigo-50">
                    درباره ما
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}

export default memo(Header);
