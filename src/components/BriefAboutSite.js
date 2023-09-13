import React, {useEffect, useState} from 'react';

const messages = [
    "Welcome to my portfolio website",
    "I am a passionate FullStack Developer",
    "I specialize in Backend Development",
    "Exploring new technologies is my forte",
    "I enjoy solving complex problems",
    "From databases to APIs, I handle all the technical complexities",
    "Discover my work and get to know me better with a quick login"
]



const  BriefAboutSite = () => {
    
    const [arrayIndex,setArrayIndex] = useState(0)
    const [currMessage,setCurrMessage] = useState("")
    const [goFront,setGofront] = useState(true)

    useEffect(()=>{
        
        if(goFront){
            if(currMessage.length < messages[arrayIndex].length){
                setTimeout(()=>{
                    setCurrMessage(messages[arrayIndex].slice(0,currMessage.length+1))
                },100)
            }
            else{
                //wait 1 seconds and then do the things
                setTimeout(()=>{
                    setGofront(false)
                },2000)
            }
        }else{
            if(currMessage.length !== 0){
                setTimeout(()=>{
                    setCurrMessage(currMessage.slice(0,-1))
                },70)
            }
            else{
                //wait 1 seconds and then do the things
                setTimeout(()=>{
                    if(arrayIndex === messages.length - 1){ setArrayIndex(0)}
                    else {setArrayIndex(arrayIndex + 1)}
                    setGofront(true)
                },1000)
            }
        }

    },[currMessage,goFront,arrayIndex])


    return (
        <div className="BriefAboutSite">
            <h2>Hello there !<br></br>I am <span>Ritik Thapliyal</span></h2>
            <div className="text-animation">
                <p>{currMessage}<span className="cursor">|</span></p>
            </div>
        </div>
    );
};

export default  BriefAboutSite
