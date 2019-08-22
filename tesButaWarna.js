/* 
ingat langkah demi langkah ya
() YANG KITA CARI APA?
    * nama lengkap/ nama  harus diisi jika kosong tidak bisa masuk

    * random color tapi cuma 1 warna aja
    * yang beda di klik benar
    * misal klik salah tetap berlanjut
    
    * tampil score benar berapa
    * tampil nama/ player
    
() BAGAIMANA CARA MENCARINYA?
    * belum tau

    * pake function Math.floor(Math.random)
    * belum tau
    * belum tau
    
    * 
() BUTUH APA SAJA?
    * var = document.getElamentId
    * 
    * 
*/
/*
kotak berjumlah 4 berupa div -- id = box1 - box4
    nanti akan diacak menggunakan == math.random warnanya sebanyak 20 kali kenapa karena kita akan 20 level
        => 3 warna yang sama document.getElementById
        => 1 warna beda

    
*/

//Nb : variabel itu wadah itu bukan parameter
// var indek = document.getElementById('wajib');
// function klik(){
//     alert ('Harus di isi dulu');
// }
// indek.onclick = klik();


//  var colors = ['red','green'];
//  var kotak = document.querySelectorAll('#box') ;
//  //kotak.style.backgroundColor = 'yellow';
//     for (i = 0 ; i < 6 ; i++) {
//     kotak[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

// }
function getRandomInt() {
    
    document.getElementById('box').innerHTML
    return Math.floor(Math.random() * 5);
  