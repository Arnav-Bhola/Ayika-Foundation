import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";
import PhoneNavbar from "./PhoneNavbar";

import Logo from "../../assets/images/logo-large.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [shouldShowNavbar, setShouldshowNavbar] = useState(false);

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["branding"]}>
          <img
            className={styles["logo"]}
            src={Logo}
            alt='Ayika Foundation'
          />
          <h2 className={styles["brand"]}>
            <Link to='/'>Ayika Foundation</Link>
          </h2>
        </div>
        <div className={styles["navigation"]}>
          <div className={styles["links"]}>
            <Link
              to='/story'
              className={styles["link"]}
            >
              Our Story
            </Link>
            <Link
              to='/team'
              className={styles["link"]}
            >
              Team
            </Link>
            <Link
              to='/projects'
              className={styles["link"]}
            >
              Projects
            </Link>
            <Link
              to='/gallery'
              className={styles["link"]}
            >
              Gallery
            </Link>
          </div>
          <a
            href='https://forms.gle/Q3qbF55uf8EG7wE3A'
            className={styles["link"] + " " + styles["button"]}
          >
            Contact Us
          </a>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className={styles["phone-toggler"]}
          onClick={() => setShouldshowNavbar(!shouldShowNavbar)}
        />
      </div>
      <PhoneNavbar shouldShow={shouldShowNavbar} />
    </>
  );
};

export default Navbar;
