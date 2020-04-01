import React from "react";

const LeftColumn = () => {
  const style = {
    leftbar: {
      backgroundColor: "ghostwhite",
      color: "midnightblue",
      height: "100vh"
    }
  };
  return (
    <div className="justify-content-center p-4" style={style.leftbar}>
      <p id="headshot" className="mt-4 ml-auto mr-auto">
        <img src="/assets/headshot2.png" alt="headshot" />
      </p>
      <h2>Susan Marshall</h2>
      <hr />
      <p id="bio">
        I create clean and responsive websites to get the information you want
        your customers to know into their hands!
      </p>
      <p>Located in Raleigh, NC</p>
      <p>(919) 555-1212</p>
      <a href="https://github.com/sjmarsnc">
        <i className="fa fa-github" />
      </a>
      <span> &nbsp; &nbsp;</span>
      <a href="https://www.linkedin.com/in/susan-marshall-11367715/">
        <i className="fa fa-2 fa-linkedin" />
      </a>
      <span>&nbsp; &nbsp; </span>
      <a href="mailto:sjmarsnc@gmail.com">
        <i className="fa fa-paper-plane " />
      </a>
      <span> &nbsp; &nbsp; </span>
    </div>
  );
};

export default LeftColumn;
