import { Col } from "react-bootstrap";
import {BsLink45Deg} from 'react-icons/bs'

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col xs={7} md={6} sm={6} data-aos="flip-up" data-aos-duration="2000" >
      <div className="proj-imgbx" data-aos="flip-left" data-aos-duration="2000">
        <img src={imgUrl}  />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="link"><a href={link}>visite<BsLink45Deg size={25}/></a></div>
          
        </div>
      </div>
    </Col>
  )
  }