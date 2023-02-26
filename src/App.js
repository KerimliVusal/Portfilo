import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';
import { Enter } from './components/Enter';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Particle } from './components/Particle';
import {useEffect,useState} from 'react';
import Load from './components/load';


 function App({ type, color}) {
  const[loa,setLoa]=useState(true)

  useEffect(()=>{
     setTimeout(()=>
     {
      setLoa(false)
     },5000)
       
      
  },[])
 
  return (<div >
        
        {loa? 
        <div className="loader">
         <Load />
        {/* <ReactLoading type={'spinningBubbles'} color={'green'} height={100} width={100}  /> */}
        </div>
         : 
         <>
      <Enter/>
      <NavBar />
      <Banner />
      <Skills />
      <Projects/>
      <Contact />
      <Footer />
      <Particle/>
      </>
 }
    </div>
  );
}

export default App;