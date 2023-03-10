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
import "../components/NavStyle.css";

export default function MobileMenu() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar className="MDBNavbar" expand="lg" light bgColor="light">
      <MDBContainer>
        <MDBNavbarBrand href="#">
        
            <img width="150px" src="assets/images/logo-wwd.png" alt />
          
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
                    <MDBDropdownLink href="">
                      
                      <Link to="/software-development-platform">
                        Software & Platform Developments
                      </Link>
                    </MDBDropdownLink>
                    <ul className="dropdown-menu dropdown-submenu">
                    <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          <Link to="/software-development-platform/web-development">Web Development</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          <Link to="/software-development-platform/mobile-app-development">
                            Mobile App Development
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          <Link to="/software-development-platform/retail-and-ecommerce">
                            Retail And Ecommerce
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/software-development-platform/iot-development">IOT Development</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/software-development-platform/payroll-management-softwares">
                            Payroll Management Softwares
                          </Link>
                        </MDBDropdownLink>
                        </MDBDropdownItem>

                        <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/software-development-platform/pen-testing">Pen Testing</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          <Link to="/software-development-platform/assessment-platforms">
                            Assessment Platforms
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                         
                          <Link to="/software-development-platform/dashboard-reporting">
                            Dashboard Reporting
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/software-development-platform/data-labelling"> Data Labelling & Classification</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      
                      
                     
                    </ul>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="">
                      
                      <Link to="/digital-marketing">Digital Marketing</Link>
                    </MDBDropdownLink>
                    <ul className="dropdown-menu dropdown-submenu">
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/digital-marketing/search-engine-optimization">
                            Search Engine Optimization (SEO)
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/digital-marketing/social-media-marketing">
                            Social Media Marketing(SMM)
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/digital-marketing/google-ads">Google Ads</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/digital-marketing/email-marketing">Email Marketing</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/digital-marketing/graphic-designing">Graphic Designing</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/digital-marketing/video-production">Video Production</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/digital-marketing/content-development">Content Development</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/digital-marketing/logo-design">Logo Design</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/digital-marketing/brochure-design">Brochure Design</Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                    </ul>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      
                      <Link to="/cloud-service ">Cloud Service </Link>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="">
                       <Link to="/hrm">HRM</Link>
                    </MDBDropdownLink>
                    <ul className="dropdown-menu dropdown-submenu">
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/professional-staffing">
                          Professional Staffing
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/outsourcing">
                          Outsourcing                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>                    
                    </ul>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="">
                       <Link to="">Web Design & Development</Link>
                    </MDBDropdownLink>
                    <ul className="dropdown-menu dropdown-submenu">
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/website-design">
                          Website  Design
                          </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <MDBDropdownLink href="#">
                          
                          <Link to="/website-development">
                          Website Development                      </Link>
                        </MDBDropdownLink>
                      </MDBDropdownItem>                    
                    </ul>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      
                      <Link to="/ui-ux-design">UI/UX Design</Link>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">
                      
                      <Link to="/erp-crm-solutions">ERP & CRM Solutions</Link>
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
