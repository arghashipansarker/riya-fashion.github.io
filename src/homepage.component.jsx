import React from 'react';
import "./homepage.styles.scss"

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="tittle">HATS</h1>
                        <span className="subtittle">Shop NOW</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="tittle">JACKETS</h1>
                        <span className="subtittle">Shop NOW</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="tittle">SNICKERS</h1>
                        <span className="subtittle">Shop NOW</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="tittle">WOMENS</h1>
                        <span className="subtittle">Shop NOW</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="tittle">MENS</h1>
                        <span className="subtittle">Shop NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;