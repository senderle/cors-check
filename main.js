   
(function() {
  var invocation = new XMLHttpRequest();

  var url = 'https://catalog.hathitrust.org/api/volumes/brief/oclc/424023.json';

  if(invocation) {    
    invocation.open('GET', url, true);
    invocation.onreadystatechange = function() {
		var response = invocation.responseText;
		var htrec = JSON.parse(response);
		var items = htrec.items;
		var recordIds = [];
		for (i = 0; i < items.length; i++) {
			recordIds.push(items[i].fromRecord);
		}

		document.getElementById('output').textContent = recordIds.join(', ');
	};
    invocation.send(); 
  }
})();
