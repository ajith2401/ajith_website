import React from "react";

function About() {
  return (
    <section className="intro text-center section-padding color-bg" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 wp1">
            <h1 className="arrow">
              A little <span>about</span> me
            </h1>
            <p>
              I am enough of an artist to draw freely upon my imagination. The
              point is that when I see a sunset or a{" "}
              <a href="#">waterfall</a> or something, for a split second it's
              so great, because for a little bit I'm out of my brain, and it's
              got nothing to do with me. I'm not trying to figure it out, you
              know what I mean? And I wonder if I can somehow find a way to
              maintain that mind stillness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;