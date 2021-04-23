import React from "react";
import { Particle } from "jparticles";
import "./Nodes.css";

class Nodes extends React.Component {
    componentDidMount() {
        new Particle("#nodes", {
            proximity: 90,
            range: 100,
            color: "#9ca3af",
            parallax: true,
        });
    }

    render() {
        return <div id="nodes"></div>;
    }
}

export default Nodes;
