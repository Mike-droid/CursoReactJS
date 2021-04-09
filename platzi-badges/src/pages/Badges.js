import React, { Component } from 'react'
import './styles/Badges.css'
import {Link} from 'react-router-dom'
import confLogo from './../images/badge-header.svg'
import BadgesList from './../components/BadgesList'
import PageLoading from './../components/PageLoading'
import PageError from './../components/PageError'
import MiniLoader from './../components/MiniLoader'
import api from '../api'

export class Badges extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount(){
    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 5000) //!POLLING ES MALA PRÁCTICA PERO ES PARA EJEMPLO
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.list() //* Esta llamada es asíncrona
      this.setState({ loading: false, data: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="conf logo"/>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges_buttons">
            <Link to="/badges/new" className="btn btn-primary">New badge</Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
            <BadgesList badges={this.state.data} />

            {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges
