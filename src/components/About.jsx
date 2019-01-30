import React, { Component } from 'react';
import ParallaxComponent from 'react-parallax-component';
import './About.css';

class About extends Component {
    state = { count:0 };
    
    

    render() { 
        return ( 
            <div className="about">
            <header >
                
                
                    <div className="axis">
                    <span id="outer" className ="Header">
                    <p id ="bio">Hi, my name is Tanush Samson.</p>
                    
                    </span>
                    <br/>
                    <span class="dot2"></span>
                    <span class="dot3"></span>
                    <span class="dot4"></span>
                    <span class="dot5"></span>
                    <span class="dot6"></span>
                    <button id="button" class="arrow" onClick={Text}>🡓</button>
                    {/* 🡓 △*/}
                    </div>
                    
                
                
            </header>
             </div>
         );
    }
}
var count = 0;

function Text()
    {   
        
        
        if(count==0)
        {
        document.getElementById("bio").innerHTML= "!!FIX!!!I'm a senior at Kalamazoo College interested in pursuing a career in Computer and Data Science. The impact of technology, mainly software, on all our lives cannot be overstated. And I look forward to contributing to that in a meaningful way.";
        //document.getElementById("bio").style.fontSize = "2vw";
        count++;
        return;
        }

        if(count==1)
        {
        document.getElementById("bio").innerHTML= "!!!FIXX!!!I am highly design oriented, having experience in both the ideation and the implementation process for a number of projects. I am interested in the applications of emerging technologies such as neuromorphic computing and the Blockchain, and established technologies such as ML.";
        //document.getElementById("bio").style.fontSize = "2vw";
        count++;
        return;
        }
        
        if(count==2)
        {
        document.getElementById("bio").innerHTML= "In my spare time, I enjoy playing soccer, binge watching Breaking Bad for the 20th time and graphic designing.";
        //document.getElementById("bio").style.fontSize = "2vw";
        count++;
        return;
        }
        if (count > 2)
        {
                document.getElementById("bio").innerHTML= "Hi, my name is Tanush Samson.";
                //document.getElementById("bio").style.fontSize = "2vw";
                count = 0;
                return;
        }
        
        console.log(count);

    }
 
export default About;