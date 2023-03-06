import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../components/NavStyle.css";

export default function NewMenu() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer>
        <MDBNavbarBrand href="#">
          <Navbar.Brand>
            <img width="150px" src="assets/images/logo-wwd.png" alt />
          </Navbar.Brand>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link to="/">Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link to="/about">About</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Our Services
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      {" "}
                      <Link to="/software-development-platform">
                        software &platform developments{" "}
                      </Link>
                    </MDBDropdownLink>
                    <ul className="dropdown-menu dropdown-submenu">
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          {" "}
                          <Link to="/dashboard-reporting">
                            Dashboard Reporting
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          <Link to="/mobile-app-development">
                            Mobile App Development
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          {" "}
                          <Link to="/pen-testing">Pen Testing</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          <Link to="/web-development">Web Development</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          {" "}
                          <Link to="/iot-development">IOT Development</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          {" "}
                          <Link to="/media">Media</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          <Link to="/retail-and-ecommerce">
                            Retail And Ecommerce
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          <Link to="/assessement-platforms">
                            Assessment Platforms
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          {" "}
                          <Link to="/payroll-management-softwares">
                            Payroll Management Softwares
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                    </ul>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      {" "}
                      <Link to="/digital-marketing">Digital Marketing</Link>
                    </MDBDropdownLink>
                    <ul className="dropdown-menu dropdown-submenu">
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          {" "}
                          <Link to="/search-engine-optimization">
                            Search Engine Optimization (SEO)
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          {" "}
                          <Link to="/social-media-marketing">
                            Social Media Marketing(SMM)
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          {" "}
                          <Link to="/google-ads">Google Ads</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          {" "}
                          <Link to="/graphic-designing">Graphic Designing</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                    </ul>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      {" "}
                      <Link to="/cloud-service ">Cloud Service </Link>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      {" "}
                      <Link to="/hrm">HRM</Link>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      <Link to="/digital-marketing-academy">
                        Digital Academy
                      </Link>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link to="/careers">Careers</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link to="/blog">Blog</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                <Link to="/contact">Contact Us</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
