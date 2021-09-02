import React from 'react'
import './Work.css'
import t1 from './../../Portfolio material/Tshirt/t1.png'
import t2 from './../../Portfolio material/Tshirt/t2.png'
import t3 from './../../Portfolio material/Tshirt/t3.png'
import t4 from './../../Portfolio material/Tshirt/t4.png'
import t5 from './../../Portfolio material/Tshirt/t5.png'
import l1 from './../../Portfolio material/Logo/l1.png'
import l2 from './../../Portfolio material/Logo/l2.png'
import l3 from './../../Portfolio material/Logo/l3.png'
import l4 from './../../Portfolio material/Logo/l4.png'
import l5 from './../../Portfolio material/Logo/l5.png'
import Card from './ProjectCard'
function Work() {
    const changeContainer=(name)=>{
    console.log("HI")
    }
    return (
        <div className="work" id="work">
            <div className="switchButtons">
                <button type="button" className="projects" 
                onClick={()=>{document.querySelector(".projectContainer").style.display="block"
                document.querySelector(".tsContainer").style.display="none"
                document.querySelector(".logoContainer").style.display="none"
                document.querySelector(".tshirt").style.borderColor="#c40866"
                document.querySelector(".logo").style.borderColor="#c40866"
                document.querySelector(".projects").style.borderColor="blue"
                }}>Projects</button>

                <button type="button" className="logo" 
                onClick={()=>{document.querySelector(".logoContainer").style.display="block"
                document.querySelector(".tsContainer").style.display="none"
                document.querySelector(".projectContainer").style.display="none"
                document.querySelector(".tshirt").style.borderColor="#c40866"
                document.querySelector(".logo").style.borderColor="blue"
                document.querySelector(".projects").style.borderColor="#c40866"}}>Logo Designs</button>

                <button type="button" className="tshirt" 
                onClick={()=>{document.querySelector(".tsContainer").style.display="block"
                document.querySelector(".projectContainer").style.display="none"
                document.querySelector(".logoContainer").style.display="none"
                document.querySelector(".tshirt").style.borderColor="blue"
                document.querySelector(".logo").style.borderColor="#c40866"
                document.querySelector(".projects").style.borderColor="#c40866"}}>T-shirt Designs</button>
            </div>

            <div className="projectContainer">
             <Card title="" live="" code="" image=""></Card>
             <Card title="" live="" code="" image=""></Card>
             <Card title="" live="" code="" image=""></Card>
             <Card title="" live="" code="" image=""></Card>
            </div>
            <div className="logoContainer">
            <img src={l1}></img>
            <img src={l2}></img>
            <img src={l3}></img>
            <img src={l4}></img>
            <img src={l5}></img>
            </div>
            <div className="tsContainer">
            <img src={t1}></img>
            <img src={t2}></img>
            <img src={t3}></img>
            <img src={t4}></img>
            <img src={t5}></img>
            </div>
        </div>
    )
}

export default Work
