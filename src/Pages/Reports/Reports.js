import React from 'react'
import "./Reports.css"
const Reports = () => {
  return (
<div classname="accordion" id="accordionExample">
  <div classname="accordion-item">
    <h2 classname="accordion-header">
      <button classname="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      E-CELL 2022-2023
      </button>
    </h2>
    <div id="collapseOne" classname="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div classname="accordion-body">
      <iframe src="https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true" frameborder="0"  ></iframe>
      </div>
    </div>
  </div>
  <div classname="accordion-item">
    <h2 classname="accordion-header">
      <button classname="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      E-CELL 2022-2023
      </button>
    </h2>
    <div id="collapseTwo" classname="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div classname="accordion-body">
      <iframe src="https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true" frameborder="0"  ></iframe>
      </div>
    </div>
  </div>
  <div classname="accordion-item">
    <h2 classname="accordion-header">
      <button classname="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        E-CELL 2022-2023
      </button>
    </h2>
    <div id="collapseThree" classname="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div classname="accordion-body">
      <iframe src="https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true" frameborder="0"  ></iframe>
      </div>
    </div>
  </div>
</div>

  )
}

export default Reports
