import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>
                Copyright © <a href="https://lookmyweb.com">Lookmyweb </a>
                {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
