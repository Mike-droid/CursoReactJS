import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './styles/Home.css'
import Astronauts from './../images/astronauts.svg'
import PlatziConf from './../images/platziconf-logo.svg'

export class Home extends Component {
  render() {
    return (
      <main className="main">

        <section className="platzi_conf">
          <img className="section__platziconf_logo" src={PlatziConf} alt="PlatziConf Logo" />
          <h2 className="section__platzi_h2">PRINT YOUR BADGES</h2>
          <p className="section__plazti_p">The easiest way to manage your conference</p>
          <Link to="/badges" className="section__link_badge">
            <button>Star now</button>
          </Link>
        </section>

        <section className="plazticonf-astronauts">
          <img className="section__astronauts" src={Astronauts} alt="Astronauts" />
        </section>

      </main>
    )
  }
}

export default Home
