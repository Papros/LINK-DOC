
let area = document.getElementById('cargo_container_area');


class cargoContainer{
    id = 0;
    left = 0; // %
    top = 0;   // %
    color = '#ffffff';
    title ="";
    href = "";
    blank = false;

    constructor(i,l,t,c,n,h,b){
        this.id=i;
        this.left = l;
        this.top = t;
        this.color = c;
        this.title = n;
        this.href = h;
        this.blank = b;
    }
}

//addContainer(new cargoContainer(1,100,500,"#ffffff","DRIVE","https://google.pl",false));
//addContainer(new cargoContainer(2,100,300,"#ddee00","YT","https://youtube.pl",false));
//saveContainer();




let jsonstring = "";

load();
function load() {
    const txtFile = new XMLHttpRequest();

    txtFile.onreadystatechange = function () {
            jsonstring = txtFile.responseText;
    };
    console.log(jsonstring)
    txtFile.open("GET", '/Res/Document/container.txt', true);
    txtFile.send(null);

}

console.log(jsonstring);


let cargo_list = JSON.parse(jstring);
drawContainer();

function show(l){

    for(let i =0;i<l.length;i++){
        console.log(i+": "+l[i].id);
        console.log(i+": "+l[i].color);
        console.log(i+": "+l[i].left);
        console.log(i+": "+l[i].top);
        console.log(i+": "+l[i].title);
        console.log(i+": "+l[i].href);
    }

}

function saveContainer() {

    let cargo_string = JSON.stringify(cargo_list);
    console.log(cargo_string);

}

function addContainer(c){
    cargo_list.push(c);
}


function drawContainer(){

    let i =0;
    for(i=0;i<cargo_list.length;i++){

        let cargo = document.createElement("div");
        let cargo_a = document.createElement("a");

        cargo.className = 'cargo_container';
        cargo.id = "cargo"+cargo_list[i].id.toString();
        cargo.style.backgroundColor = cargo_list[i].color;
        cargo.innerHTML = cargo_list[i].title;

        cargo_a.className = 'cargo_link';
        cargo_a.id = "cargo"+cargo_list[i].id.toString()+"a";
        cargo_a.href = cargo_list[i].href;
        cargo_a.style.left = cargo_list[i].left;
        cargo_a.style.top = cargo_list[i].top;



        cargo_a.appendChild(cargo);
        area.appendChild(cargo_a);
    }

}
