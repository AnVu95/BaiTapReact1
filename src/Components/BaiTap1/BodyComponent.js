import React, { Component } from 'react'
import BannerComponent from './BannerComponent.js'
import ItemComponent from './ItemComponent.js'

export default class BodyComponent extends Component {
    render() {
        return (
            <div>
                <BannerComponent/>
                <ItemComponent/>
            </div>
        )
    }
}
