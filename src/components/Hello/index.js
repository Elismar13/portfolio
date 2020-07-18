import React, { useState, useEffect } from 'react';
import { FaInstagram, 
         FaLinkedin, 
         FaFacebook, 
         FaTwitter, 
         FaGithub,
         FaTwitch,
         FaAngleDoubleDown } from 'react-icons/fa';

import './styles.css';

import socialLinks from '../../data/socialLinks';

export default function Hello() {
    const [size, setSize] = useState(50);

    function scroll() {
        const heigth = window.screen.availHeight;
        window.scrollTo(0, heigth);
    }

    useEffect(() => {
        if(window.screen.width < 700) {
            setSize(40);
        }
        if(window.screen.width < 400) {
            setSize(20);
        }
    }, []);

    return (
        <div className="header">
                <h1>Olá, Me chamo <strong>Elismar</strong>!</h1>
            <p>Estudante de engenharia de computação e fascinado por projetos open-source.</p>
            <div className="links">
                <a href={socialLinks.Git.link}> 
                    <FaGithub    
                        size={size}   
                        title={socialLinks.Git.title}
                    /> 
                </a>
                <a href={socialLinks.Linkedin.link}> 
                    <FaLinkedin  
                        size={size}   
                        title={socialLinks.Linkedin.title}
                    /> 
                </a>
                <a href={socialLinks.Twitter.link}> 
                    <FaTwitter   
                        size={size}   
                        title={socialLinks.Twitter.title}
                    /> 
                </a>
                <a href={socialLinks.Instagram.link}> 
                    <FaInstagram 
                        size={size}
                        title={socialLinks.Instagram.title}
                    /> 
                </a>
                <a href={socialLinks.Facebook.link}> 
                    <FaFacebook  
                        size={size}   
                        title={socialLinks.Facebook.title}
                    />  
                </a> 
                <a href={socialLinks.Twitch.link}> 
                    <FaTwitch  
                        size={size}   
                        title={socialLinks.Twitch.title}
                    />  
                </a> 
            </div>
            <div className="scroll-button">
                <button onClick={() => scroll(5)}>
                    <FaAngleDoubleDown size={20} color="#ffffff" />
                </button>
            </div>
        </div>
    );
}