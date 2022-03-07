import React from "react";

function Shaharlar() {
  return (
    <div>
      <div className="page-head">
        <div className="container">
          <div className="row">
            <div className="page-head-content">
              <h1 className="page-title">List Layout With Sidebar</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        className="properties-area recent-property"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 p0 padding-top-40">
              <div className="blog-asside-right pr0">
                <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                  <div className="panel-heading">
                    <h3 className="panel-title">Smart search</h3>
                  </div>
                  <div className="panel-body search-widget">
                    <form action="" className="form-inline">
                      <fieldset>
                        <div className="row">
                          <div className="col-xs-12">
                            <input
                              className="form-control"
                              placeholder="Key word"
                              type="text"
                            />
                          </div>
                        </div>
                      </fieldset>

                      <fieldset>
                        <div className="row">
                          <div className="col-xs-6">
                            <select
                              className="selectpicker"
                              data-live-search="true"
                              data-live-search-style="begins"
                              id="lunchBegins"
                              title="Select Your City"
                            >
                              <option>New york, CA</option>
                              <option>Paris</option>
                              <option>Casablanca</option>
                              <option>Tokyo</option>
                              <option>Marraekch</option>
                              <option>kyoto , shibua</option>
                            </select>
                          </div>
                          <div className="col-xs-6">
                            <select
                              className="selectpicker show-tick form-control"
                              id="basic"
                            >
                              <option>-Status-</option>
                              <option>Rent</option>
                              <option>Boy</option>
                              <option>used</option>
                            </select>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset className="padding-5">
                        <div className="row">
                          <div className="col-xs-6">
                            <label for="price-range">Price range ($):</label>
                            <input
                              className="span2"
                              data-slider-max="600"
                              data-slider-min="0"
                              data-slider-step="5"
                              data-slider-value="[0,450]"
                              id="price-range"
                              type="text"
                              value=""
                            />
                            <br />
                            <b className="pull-left color">2000$</b>
                            <b className="pull-right color">100000$</b>
                          </div>
                          <div className="col-xs-6">
                            <label htmlFor="property-geo">
                              Property geo (m2) :
                            </label>
                            <input
                              className="span2"
                              data-slider-max="600"
                              data-slider-min="0"
                              data-slider-step="5"
                              data-slider-value="[50,450]"
                              id="property-geo"
                              type="text"
                              value=""
                            />
                            <br />
                            <b className="pull-left color">40m</b>
                            <b className="pull-right color">12000m</b>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset className="padding-5">
                        <div className="row">
                          <div className="col-xs-6">
                            <label for="price-range">Min baths :</label>
                            <input
                              className="span2"
                              data-slider-max="600"
                              data-slider-min="0"
                              data-slider-step="5"
                              data-slider-value="[250,450]"
                              id="min-baths"
                              type="text"
                              value=""
                            />
                            <br />
                            <b className="pull-left color">1</b>
                            <b className="pull-right color">120</b>
                          </div>

                          <div className="col-xs-6">
                            <label for="property-geo">Min bed :</label>
                            <input
                              className="span2"
                              data-slider-max="600"
                              data-slider-min="0"
                              data-slider-step="5"
                              data-slider-value="[250,450]"
                              id="min-bed"
                              type="text"
                              value=""
                            />
                            <br />
                            <b className="pull-left color">1</b>
                            <b className="pull-right color">120</b>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset className="padding-5">
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="checkbox">
                              <label>
                                <input checked type="checkbox" /> Fire Place
                              </label>
                            </div>
                          </div>

                          <div className="col-xs-6">
                            <div className="checkbox">
                              <label>
                                {" "}
                                <input type="checkbox" /> Dual Sinks
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset className="padding-5">
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="checkbox">
                              <label>
                                <input checked type="checkbox" /> Swimming Pool
                              </label>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="checkbox">
                              <label>
                                <input checked type="checkbox" /> 2 Stories
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset className="padding-5">
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" /> Laundry Room
                              </label>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" /> Emergency Exit
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset className="padding-5">
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="checkbox">
                              <label>
                                <input checked type="checkbox" /> Jog Path
                              </label>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" /> 26' Ceilings
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset className="padding-5">
                        <div className="row">
                          <div className="col-xs-12">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" /> Hurricane Shutters
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset>
                        <div className="row">
                          <div className="col-xs-12">
                            <input
                              className="button btn largesearch-btn"
                              type="submit"
                              value="Search"
                            />
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>

                <div className="panel panel-default sidebar-menu wow fadeInRight animated">
                  <div className="panel-heading">
                    <h3 className="panel-title">Recommended</h3>
                  </div>
                  <div className="panel-body recent-property-widget">
                    <ul>
                      <li>
                        <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img
                              src="assets/img/demo/small-property-2.jpg"
                              alt="title"
                            />
                          </a>
                          <span className="property-seeker">
                            <b className="b-1">A</b>
                            <b className="b-2">S</b>
                          </span>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Super nice villa </a>
                          </h6>
                          <span className="property-price">3000000$</span>
                        </div>
                      </li>
                      <li>
                        <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img
                              src="assets/img/demo/small-property-1.jpg"
                              alt="title"
                            />
                          </a>
                          <span className="property-seeker">
                            <b className="b-1">A</b>
                            <b className="b-2">S</b>
                          </span>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Super nice villa </a>
                          </h6>
                          <span className="property-price">3000000$</span>
                        </div>
                      </li>
                      <li>
                        <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img
                              src="assets/img/demo/small-property-3.jpg"
                              alt="title"
                            />
                          </a>
                          <span className="property-seeker">
                            <b className="b-1">A</b>
                            <b className="b-2">S</b>
                          </span>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Super nice villa </a>
                          </h6>
                          <span className="property-price">3000000$</span>
                        </div>
                      </li>

                      <li>
                        <div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
                          <a href="single.html">
                            <img
                              src="assets/img/demo/small-property-2.jpg"
                              alt="title"
                            />
                          </a>
                          <span className="property-seeker">
                            <b className="b-1">A</b>
                            <b className="b-2">S</b>
                          </span>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
                          <h6>
                            <a href="single.html">Super nice villa </a>
                          </h6>
                          <span className="property-price">3000000$</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9 pr0 padding-top-40 properties-page">
              <div className="col-md-12 clear">
                <div className="col-xs-10 page-subheader sorting pl0">
                  <ul className="sort-by-list">
                    <li className="active">
                      <a
                        className="order_by_date"
                        data-order="ASC"
                        data-orderby="property_date"
                        href="/"
                      >
                        Property Date <i className="fa fa-sort-amount-asc"></i>
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="order_by_price"
                        data-order="DESC"
                        data-orderby="property_price"
                        href="/"
                      >
                        Property Price <i className="fa fa-sort-numeric-desc"></i>
                      </a>
                    </li>
                  </ul>

                  <div className="items-per-page">
                    <label for="items_per_page">
                      <b>Property per page :</b>
                    </label>
                    <div className="sel">
                      <select id="items_per_page" name="per_page">
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option selected="selected" value="12">
                          12
                        </option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                        <option value="60">60</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-xs-2 layout-switcher">
                  <a className="layout-list" href="/">
                    <i className="fa fa-th-list"></i>
                  </a>
                  <a className="layout-grid active" href="/">
                    <i className="fa fa-th"></i>
                  </a>
                </div>
              </div>

              <div className="col-md-12 clear">
                <div className="proerty-th" id="list-type">
                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img
                            src="assets/img/demo/property-3.jpg"
                            alt="title"
                          />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Super nice villa </a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right"> $ 300,000</span>
                        <p style={{ display: "none" }}>
                          Suspendisse ultricies Suspendisse ultricies Nulla quis
                          dapibus nisl. Suspendisse ultricies commodo arcu nec
                          pretium ...
                        </p>
                        <div className="property-icon">
                          <img src="assets/img/icon/bed.png" alt="title" />
                          (5)|
                          <img src="assets/img/icon/shawer.png" alt="title" />
                          (2)|
                          <img src="assets/img/icon/cars.png" alt="title" />
                          (1)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img
                            src="assets/img/demo/property-2.jpg"
                            alt="title"
                          />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Super nice villa </a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right"> $ 300,000</span>
                        <p style={{ display: "none" }}>
                          Suspendisse ultricies Suspendisse ultricies Nulla quis
                          dapibus nisl. Suspendisse ultricies commodo arcu nec
                          pretium ...
                        </p>
                        <div className="property-icon">
                          <img src="assets/img/icon/bed.png" alt="title" />
                          (5)|
                          <img src="assets/img/icon/shawer.png" alt="title" />
                          (2)|
                          <img src="assets/img/icon/cars.png" alt="title" />
                          (1)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img
                            src="assets/img/demo/property-1.jpg"
                            alt="title"
                          />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Super nice villa </a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right"> $ 300,000</span>
                        <p style={{ display: "none" }}>
                          Suspendisse ultricies Suspendisse ultricies Nulla quis
                          dapibus nisl. Suspendisse ultricies commodo arcu nec
                          pretium ...
                        </p>
                        <div className="property-icon">
                          <img src="assets/img/icon/bed.png" alt="title" />
                          (5)|
                          <img src="assets/img/icon/shawer.png" alt="title" />
                          (2)|
                          <img src="assets/img/icon/cars.png" alt="title" />
                          (1)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-3.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Super nice villa </a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right"> $ 300,000</span>
                        <p style={{ display: "none" }}>
                          Suspendisse ultricies Suspendisse ultricies Nulla quis
                          dapibus nisl. Suspendisse ultricies commodo arcu nec
                          pretium ...
                        </p>
                        <div className="property-icon">
                          <img src="assets/img/icon/bed.png" />
                          (5)|
                          <img src="assets/img/icon/shawer.png" />
                          (2)|
                          <img src="assets/img/icon/cars.png" />
                          (1)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-1.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Super nice villa </a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right"> $ 300,000</span>
                        <p style={{ display: "none" }}>
                          Suspendisse ultricies Suspendisse ultricies Nulla quis
                          dapibus nisl. Suspendisse ultricies commodo arcu nec
                          pretium ...
                        </p>
                        <div className="property-icon">
                          <img src="assets/img/icon/bed.png" alt="title" />
                          (5)|
                          <img src="assets/img/icon/shawer.png" alt="title" />
                          (2)|
                          <img src="assets/img/icon/cars.png" alt="title" />
                          (1)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img
                            src="assets/img/demo/property-2.jpg"
                            alt="title"
                          />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Super nice villa </a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right"> $ 300,000</span>
                        <p style={{ display: "none" }}>
                          Suspendisse ultricies Suspendisse ultricies Nulla quis
                          dapibus nisl. Suspendisse ultricies commodo arcu nec
                          pretium ...
                        </p>
                        <div className="property-icon">
                          <img src="assets/img/icon/bed.png" alt="title" />
                          (5)|
                          <img src="assets/img/icon/shawer.png" alt="title" />
                          (2)|
                          <img src="assets/img/icon/cars.png" alt="title" />
                          (1)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img
                            src="assets/img/demo/property-3.jpg"
                            alt="title"
                          />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Super nice villa </a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right"> $ 300,000</span>
                        <p style={{ display: "none" }}>
                          Suspendisse ultricies Suspendisse ultricies Nulla quis
                          dapibus nisl. Suspendisse ultricies commodo arcu nec
                          pretium ...
                        </p>
                        <div className="property-icon">
                          <img src="assets/img/icon/bed.png" alt="title" />
                          (5)|
                          <img src="assets/img/icon/shawer.png" alt="title" />
                          (2)|
                          <img src="assets/img/icon/cars.png" alt="title" />
                          (1)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img
                            src="assets/img/demo/property-2.jpg"
                            alt="title"
                          />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Super nice villa </a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right"> $ 300,000</span>
                        <p style={{ display: "none" }}>
                          Suspendisse ultricies Suspendisse ultricies Nulla quis
                          dapibus nisl. Suspendisse ultricies commodo arcu nec
                          pretium ...
                        </p>
                        <div className="property-icon">
                          <img src="assets/img/icon/bed.png" alt="title" />
                          (5)|
                          <img src="assets/img/icon/shawer.png" alt="title" />
                          (2)|
                          <img src="assets/img/icon/cars.png" alt="title" />
                          (1)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-4 p0">
                    <div className="box-two proerty-item">
                      <div className="item-thumb">
                        <a href="property-1.html">
                          <img src="assets/img/demo/property-1.jpg" />
                        </a>
                      </div>

                      <div className="item-entry overflow">
                        <h5>
                          <a href="property-1.html"> Super nice villa </a>
                        </h5>
                        <div className="dot-hr"></div>
                        <span className="pull-left">
                          <b> Area :</b> 120m{" "}
                        </span>
                        <span className="proerty-price pull-right"> $ 300,000</span>
                        <p style={{ display: "none" }}>
                          Suspendisse ultricies Suspendisse ultricies Nulla quis
                          dapibus nisl. Suspendisse ultricies commodo arcu nec
                          pretium ...
                        </p>
                        <div className="property-icon">
                          <img src="assets/img/icon/bed.png" />
                          (5)|
                          <img src="assets/img/icon/shawer.png" />
                          (2)|
                          <img src="assets/img/icon/cars.png" />
                          (1)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="pull-right">
                  <div className="pagination">
                    <ul>
                      <li>
                        <a href="#">Prev</a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shaharlar;
