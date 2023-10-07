// Reports.js
import React, { useState } from 'react';
import Doc from "../../Assets/HEY JUDEEEEEEEEE.docx"
import "./Reports.css"
const reports = [
  {
    title: 'E-CELL',
    src: Doc,
  },
  {
    title: 'Report 2',
    src: 'URL_TO_REPORT_2',
  },
  {
    title: 'Report 3',
    src: 'URL_TO_REPORT_3',
  },
  {
    title: 'Report 4',
    src: 'URL_TO_REPORT_4',
  },
  {
    title: 'Report 5',
    src: 'URL_TO_REPORT_5',
  },
  {
    title: 'Report 6',
    src: 'URL_TO_REPORT_6',
  },
];

function Reports() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="reports-container">
      <div className="accordion">
        {reports.map((report, index) => (
          <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                onClick={() => toggleAccordion(index)}
              >
                {report.title}
              </button>
            </h2>
            {activeIndex === index && (
              <div className="accordion-body">
                <iframe src={report.src} title={report.title} width="100%" height="500px" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;


