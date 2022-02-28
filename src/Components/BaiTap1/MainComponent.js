import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent.js'
import BodyComponent from './BodyComponent.js'
import FooterComponent from './FooterComponent.js'

export default class MainComponent extends Component {
    render() {
        return (
            <div className="container">
                <HeaderComponent/>
                <BodyComponent/>
                <FooterComponent/>
            </div>
        )
    }
}
