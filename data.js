const nama = "fauzi syalza";
let usia = 16;

const biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia > 12 && usia < 25 ) {
     generasi ="generasi remaja";
      } 
    else if (usia > 25 && usia < 50) {
     generasi ="generasi dewasa";
    }
    else if(usia > 5 && usia < 12){
    generasi ="generasi anak anak";
    }
    else if (usia >= 50){
     generasi ="generasi tua";
    }
      else{
            generasi = "generasi tidak ditemukan"
        }

       return biodata.innerHTML = generasi
    }

console.log(nama);
console.log(usia);

generateBiodata();