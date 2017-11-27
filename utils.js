

var typeSecondaire = {
	'appéritifs':['vérine','soupe','toast'],
	'entrées':['salade'],
	'plats':['pate','Gratin'],
	'desserts':['Gâteau','Flanc']
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value.replace("%20", " ");
    });
    return vars;
  }
