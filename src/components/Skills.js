import bootstrap from "../assets/img/bootstrap.png";
import html from  "../assets/img/html.png";
import figma from "../assets/img/figma.png";
import javascript from "../assets/img/javascript.png";
import redux from "../assets/img/redux.png";
import React from "../assets/img/React.png";
import jquery from "../assets/img/jquery.png";
import sass from "../assets/img/sass.png";
import css from "../assets/img/css.png";
import nodejs from '../assets/img/nodej.png'
import nextjs from '../assets/img/next.png'
import mongodb from '../assets/img/mongo.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className="sli" data-aos="zoom-in" data-aos-duration="2000">Skills</h2>               
                       <Carousel  responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay={true} autoPlaySpeed={1300} arrows={false}>
                            <div className="item" data-aos="zoom-out-right" data-aos-duration="2000">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item" data-aos="zoom-out-right"  data-aos-duration="2000">
                                <img src={css}/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item" data-aos="zoom-out-right"  data-aos-duration="2000">
                                <img src={html} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item" data-aos="zoom-out-right"  data-aos-duration="2000">
                                <img src={nodejs} alt="Image"/>
                                <h5>Nodejs</h5>
                            </div>
                            <div className="item " data-aos="zoom-out-left"  data-aos-duration="2000">
                                <img src={javascript}/>
                                <h5>Javascript</h5>
                            </div>
                            <div className="item" data-aos="zoom-out-left"  data-aos-duration="2000">
                                <img src={React}/>
                                <h5>React</h5>
                            </div>
                            
                            <div className="item" data-aos="zoom-out-left" data-aos-duration="2000">
                                <img src={nextjs}/>
                                <h5>Nextjs</h5>
                            </div>
                            <div className="item" data-aos="zoom-out-left" data-aos-duration="2000">
                                <img src={jquery}/>
                                <h5>JQuery</h5>
                            </div>
                            <div className="item" data-aos="fade-right"
                             >                            
                                <img src={sass}/>
                                <h5>Sass</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}