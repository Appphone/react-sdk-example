import React from "react";
import "./SidebarFooter.css";

const SidebarFooter: React.FC = () => (
    <footer>
        <p>
            Designed and developed by{" "}
            <a
                href="https://github.com/jorgesmrr"
                rel="noreferrer"
                className="sidebar__footer__link"
            >
                Jorge Moreira
            </a>
        </p>
        <p>
            See the{" "}
            <a
                href="https://github.com/jorgesmrr/react-private-messaging"
                rel="noreferrer"
                className="sidebar__footer__link"
            >
                repository on GitHub
            </a>
        </p>
    </footer>
);

export default SidebarFooter;
