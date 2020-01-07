function ang_for_loop() {
    var ang_number = prompt("magbigay ng no.", 1);
    ang_number = parseInt (ang_number);

    if (isNaN (ang_number)) {
    document.write ("dapat no. lng ang i enter!!");

    return;

    }
    for(var i=0; i<ang_number; i++) {
    setTimeout(function (){
     var da_triangle = document.createElement("div");
     da_triangle.classList.add("triangle");
     document.body.appendChild(da_triangle);
     }, 400 * i);
     }
    }