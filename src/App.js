import "./App.css";

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
          <section className="new-comment-wrapper">
            <p className="comment">
              <span className="comment-name">Mark Webber</span>{" "}
              <span className="comment-detail">
                reacted to your recent post
              </span>{" "}
              <span className="comment-cta">My first tournament today!</span>
              <p className="content-time">1m ago</p>
            </p>
          </section>

          <section className="new-comment-wrapper">
            <p className="comment">
              <span className="comment-name">Angela Gray</span>{" "}
              <span className="comment-detail">followed you</span>{" "}
              <p className="content-time">5m ago</p>
            </p>
          </section>

          <section className="new-comment-wrapper">
            <p className="comment">
              <span className="comment-name">Jacob Thompson</span>{" "}
              <span className="comment-detail">has joined your group</span>{" "}
              <span className="comment-cta"> Chess Club</span>
              <p className="content-time">1 day ago</p>
            </p>
          </section>

          <section className="old-comment-wrapper">
            <p className="comment">
              <span className="comment-name">Rizky Hasanuddin</span>{" "}
              <span className="comment-detail">sent you a private message</span>{" "}
              <p className="content-time">5 days ago</p>
            </p>
            <p>
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </p>
          </section>

          <section className="old-comment-wrapper">
            <p className="comment">
              <span className="comment-name">Kimberly Smith</span>{" "}
              <span className="comment-detail">commented on your picture</span>{" "}
              <p className="content-time">1 week ago</p>
            </p>
          </section>

          <section className="old-comment-wrapper">
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

          <section className="old-comment-wrapper">
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
