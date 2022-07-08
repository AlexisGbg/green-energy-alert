import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="navbar sticky-top text-white bg-primary px-5 border-bottom border-2 border-white">
        <div className="text-white fs-2 lh-1">
          <span className="text-dark">G</span>REEN<br className="m-0"/>
          <span className="text-dark">EN</span>ERGY<br/>
          <span className="text-dark">A</span>LERT
        </div>

        <a className="contact text-white fs-3"
          href="#why">
          Why?
        </a>
      </div>
    );
  }
}
