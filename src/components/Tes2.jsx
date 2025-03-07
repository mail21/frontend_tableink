import React, { useEffect } from "react";
import dataJson from "./../data.json";

function Tes2() {
  // 1. find min age, show the name
  // 2. find max age, show the name
  // 3. sort by min age
  // 4. sort by max age

  const findMinAge = () => {
    let person = dataJson[0];
    for (let i = 0; i < dataJson.length; i++) {
      if (dataJson[i].age < person.age) {
        person = dataJson[i];
      }
    }

    console.log(person, "person");
  };

  const findMaxAge = () => {
    let person = dataJson[0];
    for (let i = 0; i < dataJson.length; i++) {
      if (dataJson[i].age > person.age) {
        person = dataJson[i];
      }
    }

    console.log(person, "person");
  };

  const minSort = () => {
    console.log([...dataJson].sort((a, b) => a.age - b.age));
  };

  const maxSort = () => {
    console.log([...dataJson].sort((a, b) => b.age - a.age));
  };

  useEffect(() => {
    findMinAge();
    findMaxAge();

    minSort();
    maxSort();
  }, []);

  return <div>Tes2</div>;
}

export default Tes2;
