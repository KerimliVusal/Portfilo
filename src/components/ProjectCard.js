import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={3} data-aos="flip-up" data-aos-duration="2000" >
      <div className="proj-imgbx" data-aos="flip-left" data-aos-duration="2000">
        <img src={imgUrl}  />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
  }