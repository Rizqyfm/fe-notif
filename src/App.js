import "./App.css";
import Mark from "./assets/images/avatar-mark-webber.webp";
import Angela from "./assets/images/avatar-angela-gray.webp";
import Jacob from "./assets/images/avatar-jacob-thompson.webp";
import Rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "./assets/images/avatar-kimberly-smith.webp";
import Nathan from "./assets/images/avatar-nathan-peterson.webp";
import Anna from "./assets/images/avatar-anna-kim.webp";
import Chess from "./assets/images/image-chess.webp";

function App() {
  return (
    <div className="app bg-white p-6">
      <header className="app-header flex justify-between items-center mb-6">
        <section className="header-left">
          <h1 className="font-bold text-heading text-darkBLue">
            Notifications{" "}
            <span className="bg-darkBLue text-white px-3 rounded-md ml-1.5">
              3
            </span>
          </h1>
        </section>
        <section className="header-right">
          <h2 className="text-parag text-darkGrayish hover:text-blue hover:cursor-pointer">
            Mark all as read
          </h2>
        </section>
      </header>

      <body className="content-wrapper">
        <section className="content flex flex-col gap-y-4">
          <section className="new-comment-wrapper flex items-center gap-x-4">
            <img src={Mark} alt="avatar" className="w-16"></img>
            <p className="comment">
              <span className="comment-name">Mark Webber</span>{" "}
              <span className="comment-detail">
                reacted to your recent post
              </span>{" "}
              <span className="comment-cta">My first tournament today!</span>
              <i class="fa-solid fa-circle text-red ml-2"></i>
              <p className="content-time">1m ago</p>
            </p>
          </section>

          <section className="new-comment-wrapper flex items-center gap-x-4">
            <img src={Angela} alt="avatar" className="w-16"></img>
            <p className="comment">
              <span className="comment-name">Angela Gray</span>{" "}
              <span className="comment-detail">followed you</span>{" "}
              <i class="fa-solid fa-circle text-red ml-2"></i>
              <p className="content-time">5m ago</p>
            </p>
          </section>

          <section className="new-comment-wrapper flex items-center gap-x-4">
            <img src={Jacob} alt="avatar" className="w-16"></img>
            <p className="comment">
              <span className="comment-name">Jacob Thompson</span>{" "}
              <span className="comment-detail">has joined your group</span>{" "}
              <span className="comment-cta"> Chess Club</span>
              <i class="fa-solid fa-circle text-red ml-2"></i>
              <p className="content-time">1 day ago</p>
            </p>
          </section>

          <section className="old-comment-wrapper flex items-center gap-x-4">
            <img src={Rizky} alt="avatar" className="w-16"></img>
            <section className="toggle-section">
              <p className="comment">
                <span className="comment-name">Rizky Hasanuddin</span>{" "}
                <span className="comment-detail">
                  sent you a private message
                </span>{" "}
                <p className="content-time">5 days ago</p>
              </p>
              <p className="toggle-text border-solid border-2 border-grayish rounded-lg p-4 mt-4 text-grayish">
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </section>
          </section>

          <section className="old-comment-wrapper flex items-center gap-x-4">
            <img src={Kimberly} alt="avatar" className="w-16"></img>
            <p className="comment">
              <span className="comment-name">Kimberly Smith</span>{" "}
              <span className="comment-detail">commented on your picture</span>{" "}
              <p className="content-time">1 week ago</p>
            </p>
            <img src={Chess} alt="avatar" className="w-12"></img>
          </section>

          <section className="old-comment-wrapper flex items-center gap-x-4">
            <img src={Nathan} alt="avatar" className="w-16"></img>
            <p className="comment">
              <span className="comment-name">Nathan Peterson</span>{" "}
              <span className="comment-detail">
                reacted to your recent post
              </span>{" "}
              <span className="comment-cta">
                {" "}
                5 end-game strategies to increase your win rate
              </span>
              <p className="content-time">2 weeks ago</p>
            </p>
          </section>

          <section className="old-comment-wrapper flex items-center gap-x-4">
            <img src={Anna} alt="avatar" className="w-16"></img>
            <p className="comment">
              <span className="comment-name">Anna Kim</span>{" "}
              <span className="comment-detail">left the group</span>{" "}
              <span className="comment-cta"> Chess Club</span>
              <p className="content-time">2 weeks ago</p>
            </p>
          </section>
        </section>
      </body>
    </div>
  );
}

export default App;
