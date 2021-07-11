const input = document.querySelector("#add");
const  buttonAdd = document.querySelector("#btn");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');


buttonAdd.onclick = function(){

    var txt = input.value;
    if(txt ==''){
        alert('Das Feld darf nicht leer sein!'); // fehlermeldung, wenn das Feld leer ist
    }else{
        li = document.createElement('li'); //die Liste wird ergänzt
        li.innerHTML = txt; // der eingegebene Text wird
        list.insertBefore(li,list.childNodes[0]);
        input.value = '';
    }

};

//this function will allow us to check the clicked elements
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
        ev.target.classList.toggle('checked');
    }
};