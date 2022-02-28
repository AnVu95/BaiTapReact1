import React, { Component } from 'react'

export default class BannerComponent extends Component {
    render() {
        return (
            <div className="banner py-5">
                <div className="banner-content text-left">
                    <div className="ml-4">
                        <h1>A warm welcome!</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ipsa sapiente earum voluptas eligendi inventore officiis sed necessitatibus quas dolorum quis eum vitae beatae fugiat, aliquam incidunt accusamus autem. Aliquid.</p>
                        <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                    </div>
                </div>
            </div>
        )
    }
}
