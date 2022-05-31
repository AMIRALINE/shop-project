import { memo, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "./../../contexts/AppContext";

function Login(props) {
  let [requied, setRequied] = useState(false);
  let appContext = useContext(AppContext);
  let { dispath, state } = appContext;
  let [formInputs, setformInputs] = useState({
    Email: "",
    UserName: "",
    PassWord: "",
    PassWordCor: "",
  });
  let { Email, UserName, PassWord, PassWordCor } = formInputs;
  useEffect(() => {
    if (
      PassWord.length >= 6 &&
      PassWordCor.length >= 6 &&
      PassWord == PassWordCor
    ) {
      if (PassWord == PassWordCor) {
        setRequied(true);
      }
    } else {
      setRequied(false);
    }
  });
  const UserNameHandler = (e) => {
    setformInputs((perveState) => {
      return {
        ...perveState,
        UserName: e.target.value,
      };
    });
  };
  const EmailHandler = (e) => {
    setformInputs((perveState) => {
      return {
        ...perveState,
        Email: e.target.value,
      };
    });
  };
  const PassWordHandler = (e) => {
    setformInputs((perveState) => {
      return {
        ...perveState,
        PassWord: e.target.value,
      };
    });
  };
  const PassWordCorHandler = (e) => {
    setformInputs((perveState) => {
      return {
        ...perveState,
        PassWordCor: e.target.value,
      };
    });
  };
  const sumbitHandler = (e) => {
    e.preventDefault();
    dispath({ type: "login_user" });
  };
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      {state.auth ? (
        <Link
          to="/"
          className="text-lg font-semibold text-gray-700 capitalize dark:text-white hover:underline"
        >
          شماوارد اکانت خود شده اید برای ورود به خانه ضربه بزنید
        </Link>
      ) : (
        <>
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            وارد شدن به اکانت
          </h2>
          <Link
            to="/signin"
            className="text-lg font-semibold text-gray-700 capitalize dark:text-white hover:underline"
          >
            در حال حاضر اکانتی دارید؟ ضربه بزنید
          </Link>
          <form onSubmit={sumbitHandler}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  نام کاربری
                </label>
                <input
                  id="username"
                  value={UserName}
                  onChange={UserNameHandler}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  ایمیل
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  value={Email}
                  onChange={EmailHandler}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="password"
                >
                  رمز عبور
                </label>
                <input
                  id="password"
                  type="password"
                  value={PassWord}
                  onChange={PassWordHandler}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="passwordConfirmation"
                >
                  تکرار رمز عبور
                </label>
                <input
                  id="passwordConfirmation"
                  type="password"
                  value={PassWordCor}
                  onChange={PassWordCorHandler}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              {requied ? (
                <button
                  type="submit"
                  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  ورود
                </button>
              ) : (
                <>
                  <div className="bg-red-400 px-4 py-2 rounded-md texy-xl text-slate-50 hover:cursor-not-allowed">
                    ورودی ها اشتباه هستند
                  </div>
                </>
              )}
            </div>
          </form>
        </>
      )}
    </section>
  );
}

export default memo(Login);
