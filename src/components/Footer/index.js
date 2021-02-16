// Dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// Function exporting the footer component
function Footer(props) {
    return (
        <footer className="footer text-center">
            <p>
            <FontAwesomeIcon icon={faHeart} />  &copy;2021 Candice Moreau  <FontAwesomeIcon icon={faHeart} />
                {props.children}
            </p>
        </footer>
    );
}

export default Footer;