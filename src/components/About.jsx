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
                    <button id="button" class="arrow" onClick={Text}>❯</button>
                    <span class="dot2"></span>
                    <span class="dot3"></span>
                    <span class="dot4"></span>
                    <span class="dot5"></span>
                    <span class="dot6"></span>
                    
                    {/* 🡓 △*/}
                    </div>
                    
                
                
            </header>
             </div>
         );
    }
}
var count = 0;
// var enter = 0;

function Text()
    {   
        // if(enter==0){
        // setTimeout(function() { hover(count); }, 3000);
        // enter = 1;
        // }

        if(count==0)
        {
        document.getElementById("bio").innerHTML= 'I am a senior at <a href="http://www.kzoo.edu/" id="tlink" style="display:inline; padding:0px;"><u>Kalamazoo College</u></a> studying Computer and Data Science.';
        //document.getElementById("bio").style.fontSize = "2vw";
        count++;
        return;
        }else if(count==1)
        {
        document.getElementById("bio").innerHTML= 'I am a sucker for good design. I strive to create things that exist in the ideal intersection of <a href="https://www.behance.net/Tanflare" id="tlink" style="display:inline; padding:0px;"><u>design</u></a> and <a href="https://github.com/tanflare" id="tlink" style="display:inline; padding:0px;"><u>code</u></a>. My interests lie in web design and data science.';
        //document.getElementById("bio").style.fontSize = "2vw";
        count++;
        return;
        }else if(count==2)
        {
        document.getElementById("bio").innerHTML= 'In my spare time I enjoy playing soccer, binge-watching Breaking Bad for the 20th time, and <a href="https://www.behance.net/Tanflare" id="tlink" style="display:inline; padding:0px;"><u>graphic designing</u></a>.';
        //document.getElementById("bio").style.fontSize = "2vw";
        count++;
        return;
        }else if(count==3)
        {
        document.getElementById("bio").innerHTML= 'This website is a <a href="https://github.com/Tanflare/ts-website" id="tlink" style="display:inline; padding:0px;"><u>WIP</u></a>. You can get in touch with me via <a href="https://www.linkedin.com/in/tanush-samson/" id="tlink" style="display:inline; padding:0px;"><u>LinkedIn</u></a> or shoot me an email at tanush.samson15@kzoo.edu.';
        //document.getElementById("bio").style.fontSize = "2vw";
        count++;
        return;
        }
        if (count > 3)
        {
                document.getElementById("bio").innerHTML= "Hi, my name is Tanush Samson.";
                //document.getElementById("bio").style.fontSize = "2vw";
                count = 0;
                return;
        }
        
        console.log(count);

    }

// function hover(a)
// {
// console.log("waited: " + a)
// enter=0;
// }
 
export default About;