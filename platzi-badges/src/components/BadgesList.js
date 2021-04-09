import React from 'react'
import './styles/BadgesList.css'
import twitterLogo from './../images/twitter-logo.svg'
import {Link} from 'react-router-dom'
import Gravatar from './Gravatar'

function useSearchBadges(badges){
  const [query , setQuery] = React.useState()
  const [filteredBadges , setFilteredResults] = React.useState(badges)

  React.useMemo(() => {
    const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query)
      })

      setFilteredResults(result)
    },
    [badges, query]
  )

  return { query, setQuery , filteredBadges }
}

function BadgesList(props) {
  const badges = props.badges

  const {query, setQuery, filteredBadges } = useSearchBadges(badges)

    if (filteredBadges.length === 0) {
      return (
        <div>
          <div className="form-group">
            <label htmlFor="">Filter Badges</label>
            <input type="text" className="form-control"
              value={query}
              onChange={
                e => setQuery(e.target.value)
              }
            />
          </div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to='/badges/new'>
            Create new badge
          </Link>
        </div>
      )
    }
    return (
      <div className="BadgesList">
        <div className="form-group">
          <label htmlFor="">Filter Badges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={
              e => setQuery(e.target.value)
            }
          />
        </div>
        <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return(
            <li key={badge.id} className="badges-item">
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <section className="badges-img-section">
                  <Gravatar className="avatar-img" email={badge.email} alt="Avatar" />
                </section>

                <section className="badges-info">
                  <h3 className="badges-names">{badge.firstName} {badge.lastName}</h3>
                  <div className="badges-twitter">
                    <img className="twitter-image"  src={twitterLogo} alt="Twitter logo" />
                    <span>{badge.twitter}</span>
                  </div>
                  <p className="badges-jobTitle">{badge.jobTitle}</p>
                </section>
              </Link>
            </li>
          )
        })}
        </ul>
      </div>
    )
}

export default BadgesList
