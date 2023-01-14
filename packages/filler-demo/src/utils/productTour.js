export default function intiateProductTour() {
  const fragment = document.createDocumentFragment();
  
  let editProductTour = document.createElement('div');
  editProductTour.setAttribute('id', 'form-container-productTour');
  editProductTour.style = 'position: fixed; top: 25.5%; right: 1.4%; height: 33px;width: 45px;'
  fragment.appendChild(editProductTour);

  let fillerProductTour = document.createElement('div');
  fillerProductTour.setAttribute('id', 'filler-productTour');
  fillerProductTour.style = 'position: fixed;top: 31%;right: 1.6%;height: 43px;width: 43px;';
  fragment.appendChild(fillerProductTour);

  document.body.appendChild(fragment);

  window.introJs().setOptions({
    steps: [{
      title: "👋 Welcome to Form Filler",
      intro: "<ul><li>When you give your product to testers or other teams in your organization, we also need to provide all the sandboxed credentials and they need to fillin all the details which makes the process repetive and boring.</li><li>This is where our filler fits in. Once configuring filler with the form credentails, with just a button click the form can be prefilled.</li><li>Let's see how it works</li></ul>"
    }, {
      title: "Demo form",
      element: document.querySelector('[data-form="payments"]'),
      intro: "This is a demo form which requires sandboxed credentials for successful submission"
    }, {
      element: document.querySelector('#filler-productTour'),
      title: "Filler ✍️",
      intro: "I have already configured with form credentials. So Click this filler to fill the form. Note that you can place it anywhere on the screen as it is draggable",
      position: 'left'
    }, {
      element: document.querySelector('#form-container-productTour'),
      title: "Configure ✍️",
      intro: "Click this if you want to edit the form credentials or add credentials for new form",
      position: 'left'
    }, {
      title: "Try it out 🍻",
      intro: "Load this below script if you want to try filler in your application <p><b>https://embeddable-form-filler.netlify.app/bundle.min.js</b></p>"
    }]
  }).setOption("tooltipClass", "productTourWidth").oncomplete(function() {
    document.getElementById("form-container-productTour").remove();
    document.getElementById("filler-productTour").remove();
  }).start();
}