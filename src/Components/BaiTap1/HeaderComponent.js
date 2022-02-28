import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className="header">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="header-content">
                        <a class="navbar-brand" href="#">Start Bootstrap</a>
                        <div class="collapse navbar-collapse nav" id="navbar-home">
                            <div class="navbar-nav">
                                <a class="nav-link active" href="#">Home</a>
                                <a class="nav-link" href="#">About</a>
                                <a class="nav-link" href="#">Pricing</a>
                                <a class="nav-link">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
