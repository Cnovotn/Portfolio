import React, { Component } from 'react'
import './style.css'

export default class WorkExperience extends Component {
    static propTypes = {

    }
    singleWorkExperience = {
        "company_name": "Vibe Inc.",
        "company_website" : "https://vibe.us",
        "job_title": "Account & Project Manager",
        "location": "Bellevue, WA",
        "start_date": "June 2019",
        "end_date": "March 2020",
        "description": "Description of this job at Vibe",
        "key_points" : ["key point one", "key point two", "key point three"]
    }
    workExperiences = [
        {
            "company_name": "Vibe Inc.",
            "company_website" : "https://vibe.us",
            "image_link": "../static/companypics/vibe-board.jpg",
            "job_title": "Technical Support Specialits",
            "location": "Remote",
            "start_date": "September 2020",
            "end_date": "January 2021",
            "description": "Description of this job at Vibe",
            "key_points" : ["key point one", "key point two", "key point three"]
        },
        {
            "company_name": "Vibe Inc.",
            "company_website" : "https://vibe.us",
            "image_link": "../static/companypics/vibe-board.jpg",
            "job_title": "Account & Project Manager",
            "location": "Bellevue, WA",
            "start_date": "June 2019",
            "end_date": "March 2020",
            "description": "Description of this job at Vibe",
            "key_points" : ["key point one", "key point two", "key point three"]
        },
        {
            "company_name": "Glimpsewearables",
            "company_website" : "https://glimpsewearables.com",
            "image_link": "../static/companypics/vibe-board.jpg",
            "job_title": "Full Stack Software Engineer",
            "location": "Seattle, WA",
            "start_date": "June 2018",
            "end_date": "September 2019",
            "description": "Description of this job at Glimpsewearables",
            "key_points" : ["key point one", "key point two", "key point three"]
        },


    ]

    createWorkExperienceSections() {
        console.log("Creating work experiences")
    }
    createSingleWorkExperience(workData) {
        console.log("Creating a single work experience")
    }
    componentDidMount(){
        console.log("Component Mounted")
        this.createSingleWorkExperience(this.singleWorkExperience)
    }
    componentWillMount(){
        console.log("Is the component going to mount?")
    }
    
    render() {
        return (
            <div>
                <div id="experience-section-card" className="container">
                    <div id="vibe-one" className="experience-section-card">
                        <div className="meta">
                            <div className="photo" style={{backgroundImage: "url('../static/companypics/vibe-board.jpg')"}}></div>
                            <ul className="details">
                                <li className="author"><a href="#">John Doe</a></li>
                                <li className="date">Aug. 24, 2015</li>
                                <li className="tags">
                                <ul>
                                    <li><a href="#">Learn</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="description">
                            <h1 className="experience-header">Vibe INC.</h1>
                            <h3 className="position-title">Account & Project Manager</h3>
                            <h3 className="location-title">Bellevue, WA</h3>
                            <p></p>
                        </div>
                    </div>
                    <div id="vibe-two" className="experience-section-card alt">
                        <div className="meta">
                            {/* <div className="photo" style="background-image: url('../static/companypics/vibe-board3.jpg')"></div> */}
                            <ul className="details">
                                <li className="author"><a href="#">John Doe</a></li>
                                <li className="date">Aug. 24, 2015</li>
                                <li className="tags">
                                <ul>
                                    <li><a href="#">Learn</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="description">
                            <h1 className="experience-header">Vibe INC.</h1>
                            <h3 className="position-title">Sales Development Representative</h3>
                            <h3 className="location-title">Bellevue, WA</h3>
                            <p></p>
                        </div>
                    </div>
                    <div id="ronovo" className="experience-section-card">
                        <div className="meta">
                            {/* <div className="photo" style="background-image: url('../static/companypics/glimpse.png')"></div> */}
                            <ul className="details">
                                <li className="author"><a href="#">John Doe</a></li>
                                <li className="date">Aug. 24, 2015</li>
                                <li className="tags">
                                <ul>
                                    <li><a href="#">Learn</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="description">
                            <h1 className="experience-header">Ronovo.io</h1>
                            <h3 className="position-title">Co-Founder & Lead Software Engineer</h3>
                            <h3 className="location-title">Seattle, WA</h3>
                            <p></p>
                        </div>
                    </div>
                    <div id="glimpsewearables" className="experience-section-card alt">
                        <div className="meta">
                            {/* <div className="photo" style="background-image: url('../static/companypics/glimpse.png')"></div> */}
                            <ul className="details">
                                <li className="author"><a href="#">John Doe</a></li>
                                <li className="date">Aug. 24, 2015</li>
                                <li className="tags">
                                <ul>
                                    <li><a href="#">Learn</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="description">
                            <h1 className="experience-header">Glimpse Wearables</h1>
                            <h3 className="position-title">Full Stack Software Engineer</h3>
                            <h3 className="location-title">Seattle, WA</h3>
                            <p></p>
                        </div>
                    </div>
                    <div id="big-beertha" className="experience-section-card">
                        <div className="meta">
                            {/* <div className="photo" style="background-image: url('../static/companypics/BigBeerthLogo.png')"></div> */}
                            <ul className="details">
                                <li className="author"><a href="#">John Doe</a></li>
                                <li className="date">Aug. 24, 2015</li>
                                <li className="tags">
                                <ul>
                                    <li><a href="#">Learn</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="description">
                            <h1 className="experience-header">Big Beertha</h1>
                            <h3 className="position-title">Online Specialist</h3>
                            <h3 className="location-title">Seattle, WA</h3>
                            <p>I did a lot of work with them</p>
                        </div>
                    </div>
                    <div id="ski-patrol" className="experience-section-card alt">
                        <div className="meta">
                            {/* <div className="photo" style="background-image: url('../static/companypics/NationalSkiPatrol.jpg')"></div> */}
                            <ul className="details">
                                <li className="author"><a href="#">John Doe</a></li>
                                <li className="date">Aug. 24, 2015</li>
                                <li className="tags">
                                <ul>
                                    <li><a href="#">Learn</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="description">
                            <h1 className="experience-header">Ski Patrol</h1>
                            <h3 className="position-title">Alpine Patroller</h3>
                            <h3 className="location-title">Spokane & Snoqualmie WA</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
