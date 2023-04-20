import "./App.css";
import bgVideo from "./videos/pexels-vimeo-857148-1920x746-30fps.mp4";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enLanData from "./languages/en.json";
import banLanData from "./languages/ban.json";
import hindiLanData from "./languages/hindi.json";
import arabicLanData from "./languages/arabic.json";
import { Footer } from "./model/footer";
import "w3-css/w3.css";
import { Nav } from "./model/nav";

//multi language support
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: enLanData,
      },
      ban: {
        translation: banLanData,
      },
      hindi: {
        translation: hindiLanData,
      },
      arabic: {
        translation: arabicLanData,
      },
    },
    lng: localStorage.getItem("lan"), // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function App() {
  //multi language
  const { t } = useTranslation();
  const dir = localStorage.getItem("lan") == "arabic" ? "rtl" : "ltl";
  return (
    <div className="dark:bg-black dark:text-white" dir={dir}>
      <header className="relative flex items-center justify-center duration-1000 h-[45vh] md:h-[70vh] mb-2 overflow-hidden">
        <div className="z-30 w3-container space-x-4 text-white w-full bg-gray-300/20 absolute left-0 top-0 w3-right-align">
          <button className="w3-btn w3-blue">Sign in</button>
          <button className="bg-gray-900 w3-padding mt-1 ">Sign Up</button>
        </div>
        <div className="z-30 p-5 md:p-10 bg-black bg-opacity-50 rounded-xl">
          <p className="text-2xl text-white mb-5">{t("title")}</p>

          <form className="md:flex md:items-center">
            <div className="relative m-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={t("search")}
                required
              />
            </div>
            {/* date picker start*/}
            <div className="flex items-center justify-center min-[0px]:max-md:mb-2 min-[0px]:max-md:mx-5">
              <div className="relative">
                <input
                  name="start"
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <span className="mx-2 text-white">{t("to")}</span>
              <div className="relative">
                <input
                  name="end"
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            {/* date picker close */}
            <div className="min-[300px]:max-md:mx-20">
              <button
                type="submit"
                className="p-2.5 mx-4 md:ml-4 items-center flex min-[300px]:max-md:px-20 text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="md:sr-only items-center min-[300px]:max-md:visible">
                  {" "}
                  &nbsp;{t("search")}
                </span>
              </button>
            </div>
          </form>
        </div>
        <video
          loop
          autoPlay
          muted
          class="absolute z-10 w-auto max-w-none opacity-80"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
      {/* Sticky nav bar start */}
      <Nav t={t} />
      {/* nav bar end */}
      <div className="my-5 dark:bg-black dark:text-white">
        {/* About us section */}
        <div className="sm:grid mb-4 grid-cols-2">
          <div className="mb-5 sm:mb-0">
            <center>
              <img
                src="https://images.pexels.com/photos/2057610/pexels-photo-2057610.jpeg"
                alt="Lights"
                className="rounded-xl w-1/2 m-10"
              />
            </center>
          </div>
          <div className="sm:mx-auto sm:my-auto">
            <center className="text-lg font-bold">{t("hotelName")}</center>
            <div className="text-justify w3-padding overflow-hidden">
              {t("aboutHotel")}
            </div>
          </div>
        </div>
        {/* trending hotel list */}
        <div className="bg-blue-100  px-10 py-2 text-lg font-bold dark:bg-gray-900">
          {t("Trending Hotel")}
        </div>
        <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(() => {
            let container = [];
            let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //can be anything array, object
            arr.forEach((val, index) => {
              container.push(
                <div key={index}>
                  <div className="w3-card rounded-xl dark:bg-gray-900">
                    <div>
                      <div className="z-0 relative">
                        <img
                          src="https://images.pexels.com/photos/2057610/pexels-photo-2057610.jpeg"
                          alt="Lights"
                          className="rounded-t-xl"
                        />
                        <div className="absolute left-0 top-10 w3-blue px-5 py-1">
                          {t("Featured")}
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={30}
                          height={30}
                          className="fill-white hover:fill-red-600 absolute top-4 right-4 duration-1000"
                          viewBox="0 0 16 16"
                        >
                          {"{"}" "{"}"}
                          <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          />
                          {"{"}" "{"}"}
                        </svg>
                      </div>
                      <div className="p-5">
                        <b className="text-lg"> Hotel Stander</b>
                        <div className="flex space-x-36 sm:space-x-20 mt-4">
                          <p className="text-blue-500">2.8/5 {t("Average")}</p>
                          <p className="text-gray-600">2 Reviews</p>
                        </div>
                        <p>
                          from <b>$86.67</b>/night
                        </p>
                        <center>
                          <button className="w3-btn w3-blue mt-4 !px-20">
                            Book
                          </button>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              );
            });
            return container;
          })()}
        </div>
        <div className=" bg-blue-100 px-10 py-2 text-lg font-bold dark:bg-gray-900 mb-4">
          {t("Photo Gallery")}
        </div>
        <div className="w3-container  h-96 space-x-4 max-h-60 flex overflow-x-auto overflow-y-hidden">
          <div className="w3-card-4 w3-amber min-w-[44vh]">
            <div>
              <img
                src="https://images.pexels.com/photos/2057610/pexels-photo-2057610.jpeg"
                alt="Lights"
              />
            </div>
          </div>
          <div className="w3-card-4 w3-amber min-w-[44vh]">
            <div>
              <img
                src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg"
                alt="Lights"
              />
            </div>
          </div>
          <div className="w3-card-4 w3-amber min-w-[44vh]">
            <div>
              <img
                src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg"
                alt="Lights"
              />
            </div>
          </div>
          <div className="w3-card-4 w3-amber min-w-[44vh]">
            <div>
              <img
                src="https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg"
                alt="Lights"
              />
            </div>
          </div>
          <div className="w3-card-4 w3-amber min-w-[44vh]">
            <div>
              <img
                src="https://images.pexels.com/photos/2057610/pexels-photo-2057610.jpeg"
                alt="Lights"
              />
            </div>
          </div>
          <div className="w3-card-4 w3-amber min-w-[44vh]">
            <div>
              <img
                src="https://images.pexels.com/photos/2057610/pexels-photo-2057610.jpeg"
                alt="Lights"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer t={t} />
    </div>
  );
}

export default App;
