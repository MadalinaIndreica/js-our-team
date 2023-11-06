// ARRAY DI OGGETTI
const teamMembers = [
    {
        name : "Wayne Barnett",
        role : "Founder & CEO",
        image : "wayne-barnett-founder-ceo.jpg"
    },
    {
        name : "Angela Caroll",
        role : "Chief Editor",
        image : "angela-caroll-chief-editor.jpg"
    },
    {
        name : "Walter Gordon",
        role : "Office Manager",
        image : "walter-gordon-office-manager.jpg"
    },
    {
        name : "Angela Lopez",
        role : "Social Media Manager",
        image : "angela-lopez-social-media-manager.jpg"
    },
    {
        name : "Scott Estrada",
        role : "Developer",
        image : "scott-estrada-developer.jpg"
    },
    {
        name : "Barbara Ramos",
        role : "Graphic Designer",
        image : "barbara-ramos-graphic-designer.jpg"
    }
]
// STAMPO IN CONSOLE
console.log(teamMembers);

// STAMPO IN PAGINA

for (let i = 0; i < teamMembers.length; i++) {
     let curMember = teamMembers[i]; 

     document.querySelector(".col").innerHTML += 
     `<div class= "cards">
      <img src="img/${curMember.image}">
      <h3>${curMember.name}</h3>
      <p>${curMember.role}<p>
      </div>`;
     
     
    // STAMPO LE PROPRIETA DELL'OGGETTO
    for (let key in curMember) {
      console.log(key, curMember[key]);
    }

}

