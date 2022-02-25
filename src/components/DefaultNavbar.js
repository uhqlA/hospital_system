import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
//import Icon from '@material-tailwind/react/Icon';
import Button from "@material-tailwind/react/Button";

export default function DNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="blue" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <a href="/" rel="noreferrer">
            <NavbarBrand>Penn Medicine</NavbarBrand>
          </a>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <NavLink href="/" rel="noreferrer" ripple="light">
                &nbsp;Doctors Portal
              </NavLink>
              <NavLink href="/" rel="noreferrer" ripple="light">
                &nbsp;Staff Portal
              </NavLink>
              <NavLink href="/AdminLogin" rel="noreferrer" ripple="light">
                &nbsp;Admin Portal
              </NavLink>

              <div className="text-white">
                <Dropdown
                  color="transparent"
                  size="sm"
                  buttonType="link"
                  buttonText={
                    <div className="py-2.5 font-medium flex items-center">
                      <span className="ml-4">Products and Services</span>
                    </div>
                  }
                  ripple="blue"
                >
                  <Link to="/">
                    <DropdownItem color="lightBlue">
                      Outpatient Services
                    </DropdownItem>
                  </Link>
                  <Link to="/">
                    <DropdownItem color="lightBlue">
                      Inpatient Services
                    </DropdownItem>
                  </Link>
                  <Link to="/">
                    <DropdownItem color="lightBlue">
                      Special Clinic Services
                    </DropdownItem>
                  </Link>
                  <Link to="/">
                    <DropdownItem color="lightBlue">
                      Corporate Medical scheme
                    </DropdownItem>
                  </Link>
                  <Link to="/">
                    <DropdownItem color="lightBlue">
                      Family Medical scheme
                    </DropdownItem>
                  </Link>
                  <Link to="/">
                    <DropdownItem color="lightBlue">
                      Special Clinic Services
                    </DropdownItem>
                  </Link>
                  <Link to="/">
                    <DropdownItem color="lightBlue">
                      Radiology Services
                    </DropdownItem>
                  </Link>
                </Dropdown>
              </div>

              <NavLink href="/" rel="noreferrer" ripple="light">
                Contact
              </NavLink>
              <a href="/" rel="noreferrer">
                <Button
                  color="red"
                  className="bg-white text-black ml-5"
                  ripple="dark"
                >
                  Login
                </Button>
              </a>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
