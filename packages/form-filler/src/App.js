import { useEffect, useRef, useState } from "react"
import ConfigureFillerData from "./components/configureFillerData";
import FillerBody from './components/fillerBody'
const fillerStyle = {
  position: 'fixed',
  top: '25%',
  right: '1%',
  zIndex: 9999
}

function App() {
  let [formsData, setFormsData] = useState([]);
  let fillerRef = useRef(null);

  async function getFormData() {
    let res = await fetch('/filler');
    let { data } = await res.json();
    setFormsData(data);
  }
  useEffect(() => {
    getFormData();
  }, [])
  
  return (
    <>
      <span ref={fillerRef} id="filler-container" title="Fill dummy data to all the fields" style={fillerStyle}>
        <ConfigureFillerData formsData={formsData} />
        <FillerBody fillerRef={fillerRef} />
      </span>
    </>
  )
  
};

// function App() {
//   return (
//     <button className="btn btn-primary"> click me</button>
//   )
// }

export default App;