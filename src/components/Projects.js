import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import fash from "../assets/img/fash.jpg";
import netflix from "../assets/img/netflix.png";
import edulog from "../assets/img/edulog.jpg";
import furnish from "../assets/img/furnish.jpg";
import website from "../assets/img/furnish.jpg";
import lo from "../assets/img/lo.jpg";
import eco from "../assets/img/eco.webp";
import tech from '../assets/img/tech.webp'
import hanoi from '../assets/img/hanoi.png'
import hero from '../assets/img/aroma.webp'
import travel from "../assets/img/travel.jpg";
import table from "../assets/img/table.png";
import speed from "../assets/img/speed.webp";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Fashion Store",
      description: "Design & Development",
      imgUrl: fash,
      link:'https://kerimlivusal.github.io/Winter-collection/'
    },
     {
       title: "Netflix",
       description: "Design & Clone",
       imgUrl: netflix,
       link:'https://kerimlivusal.github.io/Netflx/'
     },
     {
      title: "Ecommerce",
      description: "Design & Shopping",
      imgUrl: hero,
      link:'https://kerimlivusal.github.io/Ecommerce_website/'
    },
    {
      title: "NewBrands",
      description: "Design & Shopping",
      imgUrl: eco,
      link:'https://kerimlivusal.github.io/newbrands/'
    }, 
    {
      title: "Technology",
      description: "Technology & Shoping",
      imgUrl: tech,
      link:'https://kerimlivusal.github.io/Technolgy/'

    },
    {
      title: "Tower of Hanoi",
      description: "Design & Algorithm",
      imgUrl: hanoi,
      link:'https://kerimlivusal.github.io/Tower-of-Hanoi/'
    },
    {
      title: "Employe Table",
      description: "Design & Data-Handling",
      imgUrl: table,
      link:'employetable-nextjsapp.vercel.app'
    },
    {
      title: "Typing Speed",
      description: "Design & Testing Speed",
      imgUrl: speed,
      link:'https://kerimlivusal.github.io/Typingspeed/'
    }
   
     
  ];

  return (
    <section className="project" id="projects">
      <Container fluid>
        <Row lg={1}>
          <Col>
                <h2 id="prj" data-aos="flip-up" data-aos-duration="2000" >Projects</h2>    
              
                      <Row className="pra" lg={4} sm={1} xs={1}>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
          
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}