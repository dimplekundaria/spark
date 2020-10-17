import React from 'react';

class Main extends React.Component{
    render(){
        return(
            <div className="main">
            <div className="header">
                <div className="header-titles1">Logo</div>
                <div className="header-titles">Home</div>
                <div className="header-titles">My Profile</div>
                <div className="header-titles">Clients</div>
                <button className="header-titles">Get in touch</button>

            </div>
            <div className="section">
                <div className="left-block">
                    <h2>Portugal</h2>
                    <input type="checkbox" id="mycheck"></input><span>Aasiya Jayavant</span><br></br>
                    <input type="checkbox" id="mycheck"></input><span>Aasiya Jayavant</span><br></br>
                    <input type="checkbox" id="mycheck"></input><span>Aasiya Jayavant</span><br></br>
                    <h2>Nicaragua</h2>
                    <input type="checkbox" id="mycheck"></input><span>Deveedaas Nandi</span><br></br>
                    <input type="checkbox" id="mycheck"></input><span>Deveedaas Nandi</span><br></br>
                    <input type="checkbox" id="mycheck"></input><span>Deveedaas Nandi</span><br></br>
                    

                </div>
                <div className="right-block">

                </div>

            </div>
            </div>
        )
    }
}


export default Main;