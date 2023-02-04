import Formula from './Formula'
import React, { Component } from 'react'

export default class MainInfo extends Component {
    state = {
        blocks: [
            {
                logo: 'fa fa-tablet-screen-button',
                title: "Point of sale",
                text: "A fast, intuitive, versatile point of sale that c be picked up by new staff immediately. Swi between counter-POS, mobile-POS, and queue-busting POS modes on the fly to suit your operations and staff.",
            },
            {
                logo: 'fa fa-credit-card',
                title: "Intergrated Payments",
                text: 'A whole host of fully integrated ways to pay through any channel.including in -person, fonline, pre- paid tabs, gift vouchers with support for Apple Pay and Google Pay - powered by Stripe.',
            },
            {
                logo: 'fa fa-mobile-screen-button',
                title: "Mobile Ordering",
                text: 'An industry-leading, frictionless mobile ordering system that delights your customers,reduces your team s workload by over 60% and increases spend per head significantly.',
            },
            {
                logo: 'fa fa-map-location-dot',
                title: "Order Mangagement",
                text: 'An intelligent system that manages all your on-premises and off-premises orders whilst efficiently integrating your front-of-house and back-of-house tasks to reduce service times by 30-50%.',
            },
            {
                logo: 'fa fa-bars',
                title: "Centralised Menu",
                text: 'A single, centralised menu that controls your digital, mobile and POS menus in one place, including: pricing, item modifiers, allergens, categories, display times, stock levels, and recipes.',
            },
            {
                logo: 'fa fa-address-book',
                title: "Bookings & Deposits",
                text: 'An integrated booking system that captures bookings, manages your sittings, minimises no-shows with seamless capture of booking deposits which are automatically assigned to the table.',
            }
        ]
    }



    render() {
        return (
            <div className='container'>
                {this.state.blocks.map(item => {
                    return <Formula blocks={item} key={item.title}/>
                })}
            </div>
        )
    }
}
