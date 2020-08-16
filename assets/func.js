let createReport = document.getElementById('createReport');
/*
createReport.addEventListener('click', function(e) {
    
    e.target.innerHTML += "<div id=\"formCreateReport\">\
                                <form method=\"post\" action=\"createReport\" enctype=\"application/x-www-form-urlencoded\">\
                                    <p><label for=\"id\">fournisseur</label><input type=\"text\" name=\"frns\"/></p>\
                                    <p><label for=\"id\">mois</label><input type=\"text\" name=\"moisFrns\"/></p>\
                                </form>\
                        </div>";


    /*
    *cette partie fonctionne mais est à utiliser plus tard
    *
    * 
    */
   /*
    let xhr = new XMLHttpRequest();
    xhr.open('GET','/createReport');
    xhr.send(null);

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            alert('is Good');
        } else {
            alert(xhr.status);
        }
    };
    
}, false);
*/


let deleteObjBancf = document.querySelectorAll('.delete');
for(var obj of deleteObjBancf) {
    obj.addEventListener('click', function(e) {
        let data = e.target.parentNode.nextElementSibling.firstChild.data;
        let parent = e.target.parentNode.parentNode;
        e.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.open('POST','/DeleteObjBancf');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('data=' + data);

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            if(xhr.responseText == "ok") {
                parent.parentNode.removeChild(parent);
            }
        } else {
            //alert(xhr.status);
        }
    };
        
    }, false);
}