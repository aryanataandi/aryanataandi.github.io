var request = new XMLHttpRequest();
request.open('GET', '../device/device.json');
request.onload = function() {
  var device = JSON.parse(request.responseText);
  loadJSON(device);
};
request.send();

function loadJSON(value) {
  var htmlString = "";

  for (i = 0; i < value.length; i++) {
    htmlString += "<div class='accordion-item'>";
    htmlString +=   "<h2 class='accordion-header' id='flush-heading-" + value[i].codename + "'>";
    htmlString +=     "<button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapse-" + value[i].codename + "' aria-expanded='false' aria-controls='flush-collapse-" + value[i].codename + "'>";
    htmlString +=       value[i].brand + " " + value[i].device;
    htmlString +=     "</button>";
    htmlString +=   "</h2>";
    htmlString +=   "<div id='flush-collapse-" + value[i].codename + "' class='accordion-collapse collapse' aria-labelledby='flush-heading-" + value[i].codename + "' data-bs-parent='#result'>";
    htmlString +=     "<div class='accordion-body d-flex justify-content-between'>";
    htmlString +=       "<div>";
    htmlString +=         "<h5>" + value[i].codename + "</h5>" ;
    htmlString +=         "<p>Maintainer : <a href='" + value[i].github + "' class='text-body fw-bold' target='_blank'>" + value[i].maintainer + "</a></p>";
    htmlString +=       "</div>";
    htmlString +=       "<div>";
    htmlString +=         "<a href='" + value[i].download + "' class='btn btn-primary px-3 mt-2' title='Download'><i class='fas fa-download fa-lg'></i><span class='d-none d-md-inline'> Download</span></a>";
    htmlString +=       "</div>";
    htmlString +=     "</div>";
    htmlString +=   "</div>";
    htmlString += "</div>";
  }

  document.getElementById("result").insertAdjacentHTML('beforeend', htmlString);
}

$.ajaxSetup({ cache: true });
$.getJSON('../device/device.json', function(data) {
$('#search').keyup(function(){
  $('#result').html('');
  $('#state').val('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  var output = "";
  $.each(data, function(key, value){
    if (value.codename.search(expression) != -1 || value.device.search(expression) != -1 || value.brand.search(expression) != -1)
    {
    output += "<div class='accordion-item'>";
    output +=   "<h2 class='accordion-header' id='flush-heading-" + value.codename + "'>";
    output +=     "<button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapse-" + value.codename + "' aria-expanded='false' aria-controls='flush-collapse-" + value.codename + "'>";
    output +=       value.brand + " " + value.device;
    output +=     "</button>";
    output +=   "</h2>";
    output +=   "<div id='flush-collapse-" + value.codename + "' class='accordion-collapse collapse' aria-labelledby='flush-heading-" + value.codename + "' data-bs-parent='#result'>";
    output +=     "<div class='accordion-body d-flex justify-content-between'>";
    output +=       "<div>";
    output +=         "<h5>" + value.codename + "</h5>" ;
    output +=         "<p>Maintainer : <a href='" + value.github + "' class='text-body fw-bold' target='_blank'>" + value.maintainer + "</a></p>";
    output +=       "</div>";
    output +=       "<div>";
    output +=         "<a href='" + value.download + "' class='btn btn-primary px-3 mt-2' title='Download'><i class='fas fa-download fa-lg'></i><span class='d-none d-md-inline'> Download</span></a>";
    output +=       "</div>";
    output +=     "</div>";
    output +=   "</div>";
    output += "</div>";
    }
  });   
  $('#result').html(output);
  });
});