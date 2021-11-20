import React from "react";
import blogging from "../assets/images/Blogging-bro.svg";

const LandingPage = () => {
  return (
    <div className="mid-row">
      <div className="landingpage-content">
        <div className="landingpage-welcome">
          <h1>Welcome to my blog</h1>
        </div>
        <div className="landingpage-image">
          <img src={blogging} alt="A guy blogging" />
        </div>
        <div className="landingpage-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sunt
            maiores nisi. Eius ut modi blanditiis tempore! Reprehenderit ullam
            alias assumenda! Eius repellat obcaecati nobis quis illum rem cum
            omnis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
