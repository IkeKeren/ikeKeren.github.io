var score=0;
var hlinas =["Hari Raya Idul Fitri 1443 H","Hari Raya Idul Adha 1443 H","Tahun Baru Islam 1444H","Hari Kemerdekaan RI","Tahun Baru 2022 Masehi","Tahun Baru 2023 Masehi","Tahun Baru Imlek 2573 Kongzili",
            "Isra Mikraj Nabi Muhammad SAW","Hari Buruh Internasional","Hari Suci Nyepi Tahun Baru Saka 1944","Wafat Isa Almasih",
            "Hari Raya Waisak 2566 BE","Hari Raya Waisak 2566 BE","Kenaikan Isa Almasih","Hari Raya Natal",
             "Hari Lahir Pancasila","Maulid Nabi Muhammad SAW"];

function validateForm(x,nosoal){
    if(x == ""){
        alert("Jawaban Harus diisi!");
        return false;
    }
    else{
        cekJawaban(x,nosoal,score);
    }
}

function cekJawaban(x,nosoal){
    if(nosoal == 1 && x == "Hari Raya Idul Fitri 1443 H"){
        correct();
        document.getElementById('soal2').style.display = 'block';
    }
    else if(nosoal == 2 && x == "Hari Kemerdekaan RI"){
        correct();
        document.getElementById('soal3').style.display = 'block';
    }else if(nosoal == 3 && x == "Tahun Baru Islam 1444H"){
        correct();
        document.getElementById('soal4').style.display = 'block';
    }else if(nosoal == 4 && x == "Tahun Baru 2023 Masehi"){
        score+=25;
        alert("HEBAAT KAMU TELAH BERHASIL MENYELESAIKAN GAME INI! Score Akhir Kamu adalah = "+score);
        document.getElementById("total-score").innerText=score;
        document.getElementById("end-game").innerText+=" FINISH GAME ";
        
        if(score<=0){
            document.getElementById('predikat').innerText="Sediih score mu kecil, ayo ulang lagi!";
        }else if(score <=75){
            document.getElementById('predikat').innerText="Mantap hasil yang Cukup Bagus! ayo main ulang lagi!";
        }
        else{
            document.getElementById('predikat').innerText="Perfecto!! Mantap Jiwaa!";
        }
    }
    else{
        wrong();
    }
}

function correct(){
    score+=25;
    alert("Hebat!! Jawaban Anda Benar! Score Anda ="+score);
    document.getElementById("total-score").innerText=score;
    return score;
}

function wrong(){
    score-=25;
    alert("Upss!! Jawaban Anda Salah! Score Anda ="+score);
    document.getElementById("total-score").innerText=score;
    return score;
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("tjawaban"), hlinas);
autocomplete(document.getElementById("tjawaban2"), hlinas);
autocomplete(document.getElementById("tjawaban3"), hlinas);
autocomplete(document.getElementById("tjawaban4"), hlinas);
