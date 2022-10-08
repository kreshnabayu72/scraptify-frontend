import React from "react";

const PageNums = ({ setCurrentPage }) => {
  const highlight = (e) => {
    let arr = Array.from(e.target.parentElement.parentElement.childNodes);
    arr.map((btn) => {
      btn.classList.remove("numClicked");
    });
    e.target.parentElement.classList.add("numClicked");
  };
  return (
    <div className="pageNavs">
      <div className="pageNums">
        <div
          className="pagenum numClicked"
          onClick={(i) => {
            setCurrentPage(1);
            highlight(i);
          }}
        >
          <p>1</p>
        </div>
        <div
          className="pagenum"
          onClick={(i) => {
            setCurrentPage(2);
            highlight(i);
          }}
        >
          <p>2</p>
        </div>
        <div
          className="pagenum"
          onClick={(i) => {
            setCurrentPage(3);
            highlight(i);
          }}
        >
          <p>3</p>
        </div>
        <div
          className="pagenum"
          onClick={(i) => {
            setCurrentPage(4);
            highlight(i);
          }}
        >
          <p>4</p>
        </div>
        <div
          className="pagenum"
          onClick={(i) => {
            setCurrentPage(5);
            highlight(i);
          }}
        >
          <p>5</p>
        </div>
        <div
          className="pagenum"
          onClick={(i) => {
            setCurrentPage(6);
            highlight(i);
          }}
        >
          <p>6</p>
        </div>
      </div>
    </div>
  );
};

export default PageNums;
