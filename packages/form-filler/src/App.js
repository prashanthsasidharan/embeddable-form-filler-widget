import { useEffect, useRef, useState } from "react"
import ConfigureFillerData from "./components/configureFillerData";
import FillerBody from './components/fillerBody'
import { getForms } from "./utils/networkCalls";
import Notify from "./contexts/notify";
const fillerStyle = {
  position: 'fixed',
  top: '25%',
  right: '1%',
  zIndex: 9999,
  width: "fit-content"
}

function App() {
  let [formsData, setFormsData] = useState([{}]);
  let fillerRef = useRef(null);
  let [isFillerLoading, setFillerLoading] = useState(false);

  async function getFormData() {
    setFillerLoading(true);
    let data =  await getForms();
    setFormsData(data);
    setFillerLoading(false);
  }
  useEffect(() => {
    getFormData();
  }, [])
  
  return (
    <Notify>
      {!isFillerLoading && (
        <span ref={fillerRef} id="filler-container" title="Fill dummy data to all the fields" style={fillerStyle}>
          <ConfigureFillerData formsData={formsData} refetchFormData={getFormData} />
          <FillerBody fillerRef={fillerRef} formsMap={formsData} />
        </span>
      )}
    </Notify>
  )
  
};

export default App;