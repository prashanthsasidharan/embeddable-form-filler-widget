import { useEffect, useRef, useState } from "react"
import EditButton from "./components/editButton";
import Filler from './components/filler';
import { getForms } from "./utils/networkCalls";
import Notify from "./contexts/notify";

function App({ canEdit=false }) {
  let [formsData, setFormsData] = useState([{}]);
  let fillerContainerRef = useRef(null);
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
        <span ref={fillerContainerRef} id="filler-container" className="filler-container" title="Fills credentials in form fields">
          {canEdit && <EditButton formsData={formsData} refetchFormData={getFormData} />}
          <Filler fillerContainerRef={fillerContainerRef} formsMap={formsData} />
        </span>
      )}
    </Notify>
  )
  
};

export default App;