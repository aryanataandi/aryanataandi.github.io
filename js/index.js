function responsiveNav() {
    var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.opacity = "1";
  } else {
    document.getElementById("navbar").style.top = "-100px";
    document.getElementById("navbar").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}

// * Collapse navbar
let navbarDropdown = document.getElementById('navbarNavDropdown');

function collapse() {
  navbarDropdown.classList.remove('show');
  setTimeout(navbarHide, 1000);
}

function navbarHide() {
  document.getElementById("navbar").style.top = "-100px";
}

// Download fetch count
// Get id from HTML
const downloadCount = document.getElementById('download')

// Get date now
const current = new Date();
const year = current.getFullYear();
const month = current.getMonth();
const date = current.getDate();

// Fetch json from sourceforge
fetch(`https://sourceforge.net/projects/komodos-rom/files/stats/json?start_date=2019-10-11&end_date=${year}-${month}-${date}&os_by_country=false&period=monthly`, { method: 'GET' })
  .then(response => response.json())
  .then(result => {
    downloadCount.appendChild(document.createTextNode(`${result.summaries.time.downloads}`))
  }) // Displayed on HTML
  .catch(error => console.log('error', error));

// Fetch for device total
// Get id form HTML
const deviceTotal = document.getElementById('device')

fetch(`https://raw.githubusercontent.com/Komodo-OS-Rom/vendor_komodo/11/komodo.devices`, { method: 'GET' })
  .then(response => response.text())
  .then(result => {
    const total = result.split(/\r\n|\r|\n/).length
    deviceTotal.appendChild(document.createTextNode(`${total - 1}`))
  }) // Displayed on HTML
  .catch(error => console.log('error', error));