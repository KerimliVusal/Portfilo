import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import vusa from "../assets/img/vusa.jpeg";
import { ArrowRightCircle,FileEarmarkPlus } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Particle } from "./Particle";




export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "HI! I'm Vusal", "Front-end Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const saveFile = () => {
    console.log('cv downloaded')
    ;}

  return (
    <section className="banner" id="home">
      <div>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} lg={7}>
              <div >
                <span className="tagline" data-aos="fade-down" data-aos-duration="2000">About Me</span>
                <h1 id="intr" data-aos="fade-down-right" data-aos-duration="3000"> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p data-aos="fade-down-right" data-aos-duration="3000">HI I'm <span id="nma"> Vusal Kerimli</span> a Front-End Developer located in Baku. 
       I have a serious passion for entire frontend spectrum, UI designs, 
       effects and creating intuitive, dynamic user experiences. I will help you make creative and memorable web applications.
        I am interested in working on ambitious projects with positive people. 
        If you have any request or question, don’t hesitate to use the form or send me an email. 
        <button id="cv"  data-aos="fade-down" data-aos-duration="2000">  <a  href="/vusal.pdf" download = "vusal's cv">Download Cv < FileEarmarkPlus size={25}/></a>
        
        </button>
        </p>
         </div>
        
          </Col>
           <Col xs={12} md={6} sm={12} lg={5}>
          
             
                <div  data-aos="fade-down-left" data-aos-duration="3000">
                  <img className="vusal" src={vusa} alt="Header Img"/>
                </div>
              
            </Col>
        </Row>
      </Container>
      </div>
    </section>
  )
}