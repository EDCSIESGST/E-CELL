import React from 'react';
import "./Reports.css";
import pdf from "../../Assets/Reports/Entrepreneurship_Development_Cell_(EDC)_SIESGST_Student_Activities_for_the_year_2022-23.docx.pdf"
const Reports = () => {
  return (
    <div>
      <section id="Reports">
        <div className="report-container">
          <h2>E-CELL 2022-2023</h2>
          <br></br>
          <div className="iframe-wrapper">
          <embed src={pdf} width="70%" height="500" 
 type="application/pdf"></embed>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;
