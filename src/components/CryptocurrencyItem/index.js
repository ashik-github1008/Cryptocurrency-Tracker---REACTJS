// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = cryptoDetails

  return (
    <li className="crypto-item-container">
      <div className="crypto-name-logo-container">
        <img src={currencyLogo} alt={currencyName} className="crypto-logo" />
        <p>{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
