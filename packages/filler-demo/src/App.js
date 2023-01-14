import './App.css';
import { useEffect } from 'react';
import intiateProductTour from './utils/productTour';
import MastercardLogo from './svgs/mastercard';
import VisaLogo from './svgs/visa';
import AppleLogo from './svgs/apple';

function App() {
  
  useEffect(() => {
    // intiateProductTour();
  }, [])
  return (
    <div className="App">
      <div className='social-media-container'>
        <a href="https://github.com/prashanthsasidharan/form-filler" className='fa fa-brands fa-github' />
        <a href="https://www.linkedin.com/in/prashanth-sasidharan-7a32301a8/" className='fa fa-brands fa-linkedin' />
        <a href="https://twitter.com/PrashanthSasid2" className="fa fa-brands fa-twitter"></a>
        <a href="https://dev.to/prashan81992916" className="fa fa-brands fa-dev"></a>
      </div>
      <div className="m-auto mt-4 border-danger-subtle form-width" data-form="payments">
        <form className="form-control p-5 d-flex flex-column gap-4 neumorphic-shadows">
          <button className="btn bg-black pointer-event text-white d-flex justify-content-center align-items-center gap-1">
            <AppleLogo />
            <p className='m-0'>Pay</p>
          </button>

          <div className="d-flex position-relative">
            <hr className="w-100" />
            <h6 className="position-absolute start-50 top-50 text-muted bg-white px-3 translate-middle m-0 text-nowrap">Or pay with Card</h6>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" data-field="email" />
          </div>

          <fieldset className="card-info">
            <label htmlFor="card-info">Card information</label>
            <div className="image-embedded-input">
              <input id="card-info" type="text" className="p-2 rounded-0 rounded-top border-bottom-0" data-field="cardInfo"/>
              <div className="images">
                <MastercardLogo />
                <VisaLogo />
              </div>
            </div>

            <div className="card-details d-flex">
              <input type="text" inputMode="numeric" placeholder="MM / YY" data-field="cardDate" className='rounded-0 border-right-0' style={{borderRight: '0px'}}/>
              <input type="number" maxLength="4" placeholder="CVV " data-field="cardCvv" className='rounded-0' />
            </div>
          </fieldset>

          <fieldset>
            <label>Name on Card</label>
            <input type="text" data-field="cardName"/>
          </fieldset>

          <fieldset>
            <label htmlFor="card-name">Country or region</label>
            <select className="p-2 rounded-0 rounded-top" data-field="country">
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="India">India</option>
            </select>
            <input type="number" placeholder="ZIP" data-field="zip" className='border-top-0 rounded-0 rounded-bottom' />
          </fieldset>

          <button className="btn btn-primary text-center p-2">Pay</button>
        
        </form>
      </div>
    </div>
  );
}

export default App;
