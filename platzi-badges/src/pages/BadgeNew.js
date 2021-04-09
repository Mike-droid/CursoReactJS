import React from 'react'
import './styles/BadgeNew.css'
import logo_header from './../images/platziconf-logo.svg'
import Badge from './../components/Badge'
import BadgeForm from './../components/BadgeForm'
import api from './../api'
import PageLoading from './../components/PageLoading'

class BagdeNew extends React.Component{
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatar: ''
    }
  }

  handleChange = e =>{
    this.setState({
      loading: false,
      error: null,
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: true, error: null})

    try {
      await api.badges.create(this.state.form)
      this.setState({loading: false})

      this.props.history.push('/badges') //*Redirigimos al usuario a otra página
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    return(
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid"  src={logo_header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'} //*Valor por defecto
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'TWITTER'}
                avatar={this.state.form.avatar || 'AVATAR'}
                email={this.state.form.email || 'EMAIL'}
              />
            </div>

            <div className="col-6">
            <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BagdeNew