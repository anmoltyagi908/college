import React from "react";

const About = ({ data }) => {
  if (data) {
    
    var timeDownload = data.timedownload;
  }

  return (
    <section id="about">
      <div className="row">
       
        <div className="nine columns main-col">
          <h2>You can Download the Timetable.</h2>
   </div>
      
            <div className="columns download">
              <p>
                <a href={timeDownload} className="button">
                  <i className="fa fa-download"></i>Download Timetable
                </a>
              </p>
            </div>
      </div>
    </section>
  );
};

export default About;
