import React from "react";
import { employees } from "../Workers";
import SectonList from "./SectonList";

const Section = () => {
  console.log(employees);
  return (
    <div>
      {employees.map((item) => {
        return <SectonList key={item.name} item={item} />;
      })}
    </div>
  );
};

export default Section;
