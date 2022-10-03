import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDown} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Enter = () => {
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


  return (
    <section className="banner" id="enter">
      <Container>
        <Row >
          <Col >
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "": ""} >
                <h1 id="ent" data-aos="fade-down" data-aos-duration="2000"> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Front-End Developer" ]'><span className="wrap">{text}</span></span></h1>
                <h1 id="wcl" data-aos="fade-down" data-aos-duration="2000" >Welcome to my Portfolio</h1>
              <a href="#home" id="btn" data-aos="fade-up" data-aos-duration="4000"><ArrowDown id="arw"  data-aos="fade-right" data-aos-duration="2000" size={60}/></a>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}