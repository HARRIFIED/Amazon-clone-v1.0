import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStateValue } from './StateProvider';
import { useAuth } from './Context/AuthContext';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';


const mapStyle = {
  width: '25px',
  height: '25px',
  marginLeft: '20px',
  marginTop: '20px',

  color: 'white',
}

const maplinkSyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '20px',
  marginRight: '10px',
  marginTop: '10px',

}

const divStyle = {
  display: 'flex',

}


const Header = () => {

  const [{ basket }, dispatch] = useStateValue();

  const { currentUser } = useAuth();


  return (
    <>
      <nav className="header">
        <Link to="/">
          <img className="header-logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
        </Link>

        <Link to="/" className="header-link">
          <div style={divStyle}>
            <FontAwesomeIcon icon="map-marker-alt" style={mapStyle} />
            <div style={maplinkSyle}>
              <span className="header-option-1">Deliver to</span>
              <span className="header-option-2">Nigeria</span>
            </div>
          </div>
        </Link>

        <div className="header-search">
          <input type="text" className="header-searchInput" />
          <SearchIcon className="header-searchIcon" />
        </div>

        <div className="header-nav">
          <Link to="/Login" className="header-link">
            <div className="header-option">
              <span className="header-option-1">Hello {!currentUser ? 'Guest' : currentUser.email}</span>
              <span className="header-option-2">{!currentUser ? 'Sign in' : 'Sign out'}</span>
            </div>
          </Link>
          <Link to="/" className="header-link">
            <div className="header-option">
              <span className="header-option-1">Return</span>
              <span className="header-option-2">Orders</span>
            </div>
          </Link>
          <Link to="/" className="header-link">
            <div className="header-option">
              <span className="header-option-1">Your</span>
              <span className="header-option-2">Prime</span>
            </div>
          </Link>
        </div>
        <Link to="/checkout" className="header-link basket">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
          </div>
          <div className="basket_info">
            <div className="count">
              <span className="header-option-2 header-basketCount" style={{ color: "orange" }} >
                {basket.length > 1 ? `${basket.length} items` : `${basket.length} item` } 
              </span>
            </div>
            <div className="basket_amount">
              <span className="header-option-2 header-basketCount" style={{ color: "green" }} >
                <CurrencyFormat

                  renderText={(value) => (
                    <>
                      <p>
                        {`${value}`}
                      </p>
                    </>
                  )}

                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </span>
            </div>
          </div>
        </Link>
      </nav>
      <deals className="header_2">
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-2">Today's special</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-2">you've got products to sell?</span>
          </div>
        </Link>
        <Link to="/update-profile" className="header-link">
          <div className="header-option">
            <span className="header-option-2">Update profile</span>
          </div>
        </Link>
        <Link to="/" className="header_sales header-link2">
          <div>
            <span className="header-option-2">Amazon's respnse to covid-19
            <FontAwesomeIcon icon="viruses" style={{ 
              color: 'orange',
             marginLeft: '20px',
             marginRight: '10px',
             marginTop: '15px',
             width: '40px', height: '40px',
             }} />
            </span>
          </div>
        </Link>
      </deals>
    </>
  );
}

export default Header;