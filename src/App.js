import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./style.css";

export default function App() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <a className="link" href="">
                Gmail
              </a>
            </li>
            <li>
              <a className="link" href="">
                Images
              </a>
            </li>
            <li>
              <div className="circle-shadow">
                <a className="menu-icon" href="">
                  <AppsIcon />
                </a>
              </div>
            </li>
            <li>
              <div className="circle-shadow">
                <a className="user-icon" href="">
                  <span>D</span>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <section className="content-section">
        <div className="content-wrapper">
          <img className="logo-img" src="asset/logo.jpg" />
          <div className="search-bar">
            <SearchIcon />
            <input id="search-input" className="search-input" type="text" />
            <KeyboardIcon />
            <MicIcon />
          </div>
          <div>
            <button className="google-search-btn">Google Search</button>
            <button className="lucky-search-btn">I'm Feeling Lucky</button>
          </div>
          <div className="language">
            <p>
              Google Offered in: <a href="">Korean</a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content upper-footer">
          <p>Korea</p>
        </div>
        <div className="footer-content lower-footer">
          <ul className="lower-left-footer">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Advertising</a>
            </li>
            <li>
              <a href="">Business</a>
            </li>
            <li>
              <a href="">How Search Works</a>
            </li>
          </ul>
          <ul className="lower-right-footer">
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Settings</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
