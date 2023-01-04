import './App.css';
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   fetch('/person', { method: 'POST', body: {name: 'Ay'}})
  //     .then(9)
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  return (
    <div className="App">
      <div className="col-4 m-auto mt-5 border-danger-subtle" data-form="payments">
        <form className="form-control p-5 d-flex flex-column gap-4 w-8">
          <button className="btn bg-black text-center pointer-event text-white">
            Pay
          </button>

          <div className="d-flex position-relative">
            <hr className="w-100" />
            <p className="position-absolute start-50 text-muted bg-white px-3 translate-middle-x m-0">Or pay with Card</p>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" data-field="email" />
          </div>

          <fieldset className="card-info">
            <label htmlFor="card-info">Card information</label>
            <div className="image-embedded-input">
              <input id="card-info" type="text" className="p-2" />
              <div className="images">
                <img src="http://www.zermatt-fun.ch/images/mastercard.jpg" width={25} />
                <img src="http://www.zermatt-fun.ch/images/mastercard.jpg" width={25} />
              </div>
            </div>

            <div className="card-details d-flex">
              <input type="text" inputMode="numeric" placeholder="MM / YY" />
              <input type="number" maxLength="4" placeholder="CVC " />
            </div>
          </fieldset>

          <fieldset>
            <label>Name on Card</label>
            <input type="text" />
          </fieldset>

          <fieldset>
            <label htmlFor="card-name">Country or region</label>
            <select className="p-2">
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
            </select>
            <input type="number" placeholder="ZIP" />
          </fieldset>

          <button className="btn btn-primary text-center p-2">Pay</button>
        
        </form>
      </div>
    </div>
  );
}

export default App;
