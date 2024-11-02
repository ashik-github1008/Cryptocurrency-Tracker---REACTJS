// Write your JS code here
import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem/index'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoList} = this.props
    return (
      <div className="cryptocurrency-list-main-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="cryptocurrency-tracker-container">
          <nav className="crypto-list-header-container">
            <div className="nav-content">
              <p>Coin Type</p>
              <div className="currency-name-container">
                <p className="usd">USD</p>
                <p className="currency-name">EURO</p>
              </div>
            </div>
          </nav>
          <ul className="crypto-item-list-container">
            {cryptoList.map(eachList => (
              <CryptocurrencyItem cryptoDetails={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
