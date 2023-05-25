import React from 'react';

function Header() {
  return (
    <section className="features text-center section-padding" id="service">
      <div className="container">
        {/* Headline */}
        <div className="row">
          <div className="col-md-12">
            <h1 className="arrow">I do amazing things for clients</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="services">
              {/* Service Box 1 */}
              <div className="col-md-4 wp2 item">
                <div className="icon">
                  <i className="fa fa-camera"></i>{/* Icon */}
                </div>
                <h2>Photographer</h2>{/* Title */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.
                  Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>{/* Description */}
              </div>
              {/* Service Box 2 */}
              <div className="col-md-4 wp2 item delay-05s">
                <div className="icon">
                  <i className="fa fa-desktop"></i>{/* Icon */}
                </div>
                <h2>Web Designer</h2>{/* Title */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.
                  Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>{/* Description */}
              </div>
              {/* Service Box 3 */}
              <div className="col-md-4 wp2 item delay-1s">
                <div className="icon">
                  <i className="fa fa-cubes"></i>{/* Icon */}
                </div>
                <h2>3D Artist</h2>{/* Title */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.
                  Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>{/* Description */}
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;