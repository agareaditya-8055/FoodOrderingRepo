const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gray-900 flex justify-center md_sm:w-full lg:px-2 px-3 text-white overflow-hidden">
        <div className=" px-5  py-12  w-full">
          <section className="flex items-center justify-between w-full mb-8">
            <span className="text-logoColor text-4xl font-bold mb-2 sm:mb-0">
              YONOHA
            </span>
            <div className="mt-3"></div>
            <section className="selector hidden md_sm:flex w-[252px] h-[38px] justify-center gap-2 md_sm:gap-0 md_sm:justify-between items-center">
              <div className="India w-100 h-full flex items-center gap-1 justify-evenly p-1 md_sm:p-3 border border-gray-300 rounded-md">
                <img
                  className="w-[15px] h-[7px] md_sm:w-[22px] md_sm:h-[14px]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAsVBMVEX/mTMSiAf/////mjH//fv6+/cAgwAAAIgAAIUAAIMAAIAAAH4AAHvu7vfe3u7Hx+AAAHb5+f20tNb39/1LS6Ghocrk5PGSksSDg7utrdEAAHLMzOS+vtxSUqRERJzX1+oQEI1ERKMvL5Z/f7d5ebaYmManp88bG5JkZK/JyeEiIpFoaKqMjL9ycrSzs9uVlctYWKI3N5tgYKw6OpoeHo8YGJEsLJYAAJAbG5lYWKkmJpLm9FjFAAAEl0lEQVR4nO3ba3PiNhiGYaoeJB9kg0/YsbEg5rQkaUtINk3+/w/rK0OyDS/tTL9YmeG5Zgin/SDuNZYRZjQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPiffoZzo1/g3EjAOTTh0IRDEw5NuK/QpGjKu8XT5mlxVzaF68GIL9CkuJ8HvqeUknTx/GB+H7kekuMmdRZ4Utogvu/bLFJ6QVu7HZTTJsXMtxHU9iHMClNk4cNW2UR+5vQt5LLJym4Znj8VqWi0MEI3dGtKbySqsnI4LndNJjOfXnuXt1rE9v7v9k8sdJt31MqfTZyNzFkTvfOkak3/ytf2zx8ftyamVdLbaVdDc9VEz+llB/lxE4ntVLOkS3S8K3La86q5qyiOmkx2lCQvtUgruqen9GdLl6nNUKVClzlFeXP09nHUZOZJP+lv5XaKWdDlz9N1kfePN770Zm4G56bJil7wWjT97Ve6bCnMgXJsT/cpiVhTNjezj5MmEc04QXnarea0XaxWIt2k9kqs+82EnikDmn2cHNM6aZIp1dpdx2Rr9xiSjk1uhaarWyNSKU6P62mrVOZieC6axP77BpDuqUy1EGmotad1mIoFzcZ6n/bP0ubkxw7G56IJ/f+XadxPKoWkOCoRm1yHOt+IRFEKeTyyj9OSticH43PQxNAOlmbgvD8+i/xaJMGka4tx0XYiqETtG/uE3a9UtJs1ww/QQZOOXqmddKOZrfItTIS8a4IojILmTooktG+XambfXAuqVw4/QAdNnqS3Oh6i5nPaXpJxHo8jr36pvWgcr8d02JI8HydhvfLk0/ADHL4J7Tnn7weoOntJRH7TLMsymSVluWxucpHM2/elgsncxXQ8fJO1p7aTOGmOm0rlb+IkjPZ1VVb1PgqTbzu/6p/RcRJPHtXp3pCGb0KTid1HmOnrY04fiyfbcWduTdfu2858N914m9IH4/X29d78+MfDGr5JpmR4POqIVptgv4yjbm/afj02M/ulibuDP58e3zFxKB0ctg3f5E2p2ccqQJEfQlWapSctb2nuVXi7+lh51DOl3gYf4fBNaNpJP+6kuqhNnR9U30QdVrGpC/2P511MPMM3eZYqMk01ffz+EtzcjMnLw14eHcoX+wA9LP/Kujw2kZKbwUeI7YTD/oT7IvNOdt3zzr8fn5RXe3xS4TiWweedC/C5mPu8fhJj/UScrbMZrLP16ANfd7Ye+3xxPba7mvXY/1y3b/t1++PuhvbGwbWs2+P7nQs+fw+4xveAFr4vvgDnFXCTN5x/wuA8pQtwPtsFx/MelxfOe1xe63mPAufHXoTzqC/B+faXFPfPn36X8Xz1v8vo9b/f2W12+P3O14UmHJpwaMKhCTf6Fc6NfoNzo5/gHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCYcmHJpwaMKhCfc3xgk4+urIdocAAAAASUVORK5CYII="
                  alt=""
                />
                <p className="text-sm md_sm:text-base">India</p>
                <i
                  className="fa-solid fa-chevron-down w-4 h-4 md_sm:w-4 md_sm:h-4"
                  style={{ color: "#ffffff" }}
                ></i>
              </div>
              <div className="English w-100 h-full flex items-center justify-evenly p-1 md_sm:p-3 gap-1 border border-gray-300 rounded-md">
                <i
                  className="fa-solid fa-globe  md_sm:w-[22px] md_sm:h-[14px]"
                  style={{ color: "#ffffff" }}
                ></i>
                <p className="text-sm md_sm:text-base">English</p>
                <i
                  className="fa-solid fa-chevron-down w-4 h-4 md_sm:w-4 md_sm:h-4 "
                  style={{ color: "#ffffff" }}
                ></i>
              </div>
            </section>
          </section>

          <div className="main-footer w-full relative grid grid-cols-2 md_sm:grid md_sm:grid-cols-3 sm:flex sm:flex-wrap sm:justify-between   ">
            <div className="foot  ">
              <h6 className="text-xs font-semibold sm:font-extrabold tracking-wider uppercase mb-3">
                ABOUT Yonoha
              </h6>
              <nav>
                <a className="no-underline" href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Who We Are
                  </p>
                </a>
                <a className="no-underline" href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Blog
                  </p>
                </a>
                <a className="no-underline" href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Work With Us
                  </p>
                </a>
                <a className="no-underline" href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Investor Relations
                  </p>
                </a>
                <a className="no-underline" href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Report Fraud
                  </p>
                </a>
                <a className="no-underline" href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Contact Us
                  </p>
                </a>
              </nav>
            </div>
            <div className="foot ">
              <h6 className="text-xs font-semibold tracking-wider uppercase mb-3">
                YONOHAVERSE
              </h6>
              <nav>
                <a href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Yonoha
                  </p>
                </a>
                <a href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Yonoit
                  </p>
                </a>
                <a href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Feeding India
                  </p>
                </a>
                <a href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Hyperpure
                  </p>
                </a>
                <a href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Yonohaland
                  </p>
                </a>
              </nav>
            </div>
            <div className="foot">
              <div className="foot3-1 mb-7">
                <h6 className="text-xs font-semibold tracking-wider uppercase mb-3">
                  FOR RESTAURANTS
                </h6>
                <nav>
                  <a href="#">
                    <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                      Partner With Us
                    </p>
                  </a>
                  <a href="#">
                    <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                      Apps For You
                    </p>
                  </a>
                </nav>
              </div>
              <div className="foot3-2">
                <h6 className="text-xs font-semibold tracking-wider uppercase mb-3">
                  FOR ENTERPRISES
                </h6>
                <nav>
                  <a href="#">
                    <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                      Yonoha For Enterprise
                    </p>
                  </a>
                </nav>
              </div>
            </div>
            <div className="foot">
              <h6 className="text-xs font-semibold tracking-wider uppercase mb-3">
                LEARN MORE
              </h6>
              <nav>
                <a href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Privacy
                  </p>
                </a>
                <a href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Security
                  </p>
                </a>
                <a href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Terms
                  </p>
                </a>
                <a href="#">
                  <p className="text-xs sm:text-sm leading-5 text-gray-400 my-2">
                    Sitemap
                  </p>
                </a>
              </nav>
            </div>
            <div className="foot  ">
              <h6 className="text-xs font-semibold tracking-wider uppercase mb-3">
                SOCIAL LINKS
              </h6>
              <div className="icons flex justify-start h-[22px] w-[201px]">
                <a
                  className="no-underline mr-2 text-xs sm:text-sm"
                  target="_blank"
                  href="https://www.linkedin.com/in/jainrithik/"
                >
                  <i
                    className="fa-brands fa-linkedin"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                <a
                  className="no-underline mr-2 text-xs sm:text-sm"
                  target="_blank"
                  href="https://www.linkedin.com/in/jainrithik/"
                >
                  <i
                    className="fa-brands fa-instagram"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                <a
                  className="no-underline mr-2 text-xs sm:text-sm"
                  target="_blank"
                  href="https://www.linkedin.com/in/jainrithik/"
                >
                  <i
                    className="fa-brands fa-twitter"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                <a
                  className="no-underline mr-2 text-xs sm:text-sm"
                  target="_blank"
                  href="https://www.linkedin.com/in/jainrithik/"
                >
                  <i
                    className="fa-brands fa-youtube"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                <a
                  className="no-underline mr-2 text-xs sm:text-sm"
                  target="_blank"
                  href="https://www.linkedin.com/in/jainrithik/"
                >
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
              </div>
              <div className="blank1 mt-6"></div>
              <section className="store ">
                <a href="#">
                  <div className="storeimg relative max-w-full w-[137px] h-[40px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                      alt="App store"
                    />
                  </div>
                </a>
                <div className="blank2 mt-3"></div>
                <a href="#">
                  <div className="storeimg relative max-w-full w-[137px] h-[40px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                      alt="Playstore"
                    />
                  </div>
                </a>
              </section>
            </div>
          </div>
          <hr className="h-line border-t border-gray-300 mt-12" />
          <p className="copyright text-xs text-gray-500 leading-4 mt-6">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy, and Content Policies. All trademarks
            are properties of their respective owners. 2008-2023 © Yonoha Ltd.
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
