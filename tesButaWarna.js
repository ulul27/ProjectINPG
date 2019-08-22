/* 
    variable math
     --> .random();

print "which box?";

capture ( box.result / answer );

    if ( box.result == true ) {
        then level++ {
    else {}
        }
    console.log "( box.result ) + you choose is wrong, please choose again!"
    }
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
function acak () {
    var randomed = Math.floor(Math.random() * 4);

    for(var i = 0; i < 4; i++) {
        console.log(i)
        if (randomed == i) {
            console.log(i, 'red');
            
            document.getElementsByClassName(String(i))[0].style.backgroundColor = 'red'
        } else {
            document.getElementsByClassName(String(i))[0].style.backgroundColor = 'green'
        }
    }
}
  