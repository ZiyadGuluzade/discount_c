import React, { Component } from 'react'
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <section id='footer'>
                    <div className='footer'>
                        <span><span>COPYRIGHT 2020</span><strong> | General Discount Cleaning | </strong><span>ALL RIGHTS RESERVED</span></span>
                    </div>
                </section>  
            </React.Fragment>
        )
    }
}

export default Footer;