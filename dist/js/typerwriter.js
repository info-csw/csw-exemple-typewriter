let i = 0;
// le teste à afficher
let txt = `Il était une fois un développeur web nommé Alex, passionné par la création d'expériences uniques.\n
En explorant les possibilités de JavaScript, il découvrit l'effet \"typewriter\".\n
Intrigué, Alex l'implémenta sur la page d'accueil de son projet, créant ainsi une expérience immersive où le texte semblait 
s'écrire tout seul, comme sur une vieille machine à écrire.\n
Les visiteurs adorèrent cet effet rétro, et bientôt, l'effet typewriter devint la signature d'Alex, se propageant à travers 
le monde du développement web.`; 
// la vitesse d'affichage de chaque lettre
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typingZone").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let buttonClic = document.getElementById("start");
buttonClic.addEventListener("click", typeWriter);