import theme from "../theme";

const particleOptions = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                area: 800
            }
        },
        color: {
            value: [theme.palette.primary.light]
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1
        },
        size: {
            value: { min: 1, max: 8 }
        },
        links: {
            enable: false,
            distance: 150,
            color: "#808080",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out"
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab"
            },
            onClick: {
                enable: true,
                mode: "repulse"
            }
        },
        modes: {
            grab: {
                distance: 140,
                links: {
                    opacity: 1
                }
            },
            push: {
                quantity: 4
            }
        }
    }
};

export default particleOptions