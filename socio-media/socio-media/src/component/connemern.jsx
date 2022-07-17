import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
const Connemern = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getAllStudent() {
      try {
        const students = await axios.get("http://localhost:8000/api/student/");
        console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudent();
  }, []);

  return (
    <div className="App">
      <h1>Connect React JS to Express JS</h1>
      {students.map((student, i) => {
        return (
          <h2 key={i}>
            {student.stuname} {student.email}
          </h2>
        );
      })}
    </div>
  );
};

export default Connemern;
