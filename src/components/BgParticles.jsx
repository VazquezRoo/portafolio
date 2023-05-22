import React, { useCallback } from "react"
import { useSelector } from "react-redux"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function BgParticles(){

    const {theme} = useSelector(store => store.action)

    const particlesInit = useCallback((engine) =>{
        loadFull(engine)
    },[])

    return(

        <div className={`w-full min-h-screen fixed grid z-[-1] ${theme? ' bg-[url("/images/bg-01.jpg")]':' bg-[url("/images/4907157.jpg")]'}`}>
            <Particles
        // id="tsparticles"
        options={{
            "particles": {
              "number": {
                "value": 20,
                "density": {
                  "enable": true,
                  "value_area": 700
                }
              },
              "color": {
                "value": `${theme?"#ffffff":"#101010"}`
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": `${theme?"#ffffff":"#101010"}`
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 10,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": `${theme?"#ffffff":"#101010"}`,
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 1
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
        init={particlesInit}
/>
        </div>
    )
}

export default BgParticles  