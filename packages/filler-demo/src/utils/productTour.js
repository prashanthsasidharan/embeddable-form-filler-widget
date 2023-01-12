export default function intiateProductTour() {
  let editProductTour = document.createElement('div');
  editProductTour.setAttribute('id', 'form-container-productTour');
  editProductTour.style = 'position: fixed; top: 25%; right: 1.2%; height: 28px;width: 40px;'
  document.body.appendChild(editProductTour);

  let fillerProductTour = document.createElement('div');
  fillerProductTour.setAttribute('id', 'filler-productTour');
  fillerProductTour.style = 'position: fixed;top: 29%;right: 1.2%;height: 43px;width: 40px;';
  document.body.appendChild(fillerProductTour);

  window.introJs().setOptions({
    steps: [{
      title: "👋 Welcome to Embedable Form Filler",
      intro: "<ul><li>When you give your product to testers or other teams in your organization, we also need to provide all the sandboxed credentials and they need to fillin all the details which makes the process repetive and boring.</li><li>This is where our filler fits in. Once configuring filler with the form credentails, with just a button click the form can be prefilled.</li><li>Let's see how it works</li></ul>"
    }, {
      title: "Demo form",
      element: document.querySelector('[data-form="payments"]'),
      intro: "This is a demo form which requires sandboxed credentials for successful submission"
    }, {
      element: document.querySelector('#filler-productTour'),
      title: "Configure ✍️",
      intro: "I have already configured with form credentials. So Click this filler to fill the form. Note that it is draggable",
      position: 'left'
    }, {
      element: document.querySelector('#form-container-productTour'),
      title: "Filler ✍️",
      intro: "Click this if you want to edit the form credentials or add credentials for new form",
      position: 'left'
    }, {
      title: "Try it out 🍻",
      intro: "Load this script - .If you want to try this in your application"
    }]
  }).setOption("tooltipClass", "productTourWidth").oncomplete(function() {
    
  }).start();
}