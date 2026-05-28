function intro(){
    document.write("Hello, I am a recent graduate from Sacramento State University. As an emerging professional, I am interested in dabbling in all areas of IT to find my niche. Most recently, I have been working on developing my skills in software development and cybersecurity. ");
}

function project(name, techs, desc){

    const newDiv = document.createElement("div");
    newDiv.className = "Project";

    const title = document.createElement('h2');
    const cont = document.createTextNode(name + " | " + techs);

    const descCont = document.createElement("p");
    const descText = document.createTextNode(desc);
    title.appendChild(cont);
    descCont.appendChild(descText);


    newDiv.appendChild(title);
    newDiv.appendChild(descCont);
    document.body.appendChild(newDiv);

}
    