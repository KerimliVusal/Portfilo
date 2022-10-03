import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import fash from "../assets/img/fash.jpg";
import netflix from "../assets/img/netflix.png";
import edulog from "../assets/img/edulog.jpg";
import furnish from "../assets/img/furnish.jpg";
import website from "../assets/img/website.jpg";
import lo from "../assets/img/lo.jpg";
import travel from "../assets/img/travel.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Fashion Sore",
      description: "Design & Development",
      imgUrl: fash,
    },
     {
       title: "Netflix",
       description: "Design & Development",
       imgUrl: netflix,
     },
     {
      title: "Education Website",
      description: "Design & Development",
      imgUrl: edulog,
    },
    {
      title: "Furniture Store",
      description: "Design & Development",
      imgUrl: furnish,
    }, 
    {
      title: "Travel",
      description: "Design & Development",
      imgUrl: travel,
    },
    {
      title: "Register form",
      description: "Design & Development",
      imgUrl: lo,
    },
    {
      title: "Personal Webpage",
      description: "Design & Development",
      imgUrl: website,
    }
   
     
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2 id="prj" data-aos="flip-up" data-aos-duration="2000" >Projects</h2>    
                <Tab.Container id="projects-tabs" defaultActiveKey="first" >                
                  <Tab.Content className={isVisible ? "" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="pra">
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}