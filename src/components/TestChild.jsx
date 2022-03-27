import React from "react";

const TestChild = ({ one = [], two = [] }) => {
  const compsOne = one.map((item, index) => <div key={index}>{item}</div>);
  const compsTwo = two.map((item, index) => <div key={index}>{item}</div>);
  return (
    <div className="min-h-screen min-w-full bg-gray-50">
      <h1>Headuing</h1>
      <div className="flex bg-blue-100 mb-10 flex-col items-center justify-start min-w-full">
        {compsOne && compsOne.length > 0 ? compsOne : <div>No Data</div>}
      </div>
      <div className="flex flex-col items-center justify-start min-w-full p-10">
        {compsTwo && compsTwo.length > 0 ? compsTwo : <div>No Data</div>}
      </div>
    </div>
  );
};

export default TestChild;

{
  /* <TestChild
        one={[<Acomp name="name" />, <Acomp name="name3333" />]}
        two={[<Acomp name="twoC" />, <Acomp name="fsfsa8name3333" />]}
      /> */
}
