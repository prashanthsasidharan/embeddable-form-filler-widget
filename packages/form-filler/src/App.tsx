import { useEffect, useRef, useState } from "react"
import EditButton from "./components/editButton";
import Filler from './components/filler'
import { getForms } from "./utils/networkCalls";
import Notify from "./contexts/notify";

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
        <span ref={fillerRef} id="filler-container" className="filler-container" title="Fills credentials in form fields">
          <EditButton formsData={formsData} refetchFormData={getFormData} />
          <Filler fillerRef={fillerRef} formsMap={formsData} />
        </span>
      )}
    </Notify>
  )
  
};

export default App;