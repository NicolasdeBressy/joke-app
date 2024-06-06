// https://api.blablagues.net/?rub=blagues

// Sélectionnez les éléments du DOM par leur ID et stockez-les dans des variables.
const header = document.getElementById("header");
const text = document.getElementById("content");

// Définissez une fonction nommée getJoke qui effectuera la requête fetch pour obtenir une blague.
getJoke = () => {
  // Effectuez une requête HTTP GET vers l'URL de l'API de blagues.
  fetch("https://api.blablagues.net/?rub=blagues")
    // Une fois que la requête est résolue, convertissez la réponse en JSON.
    .then((res) => res.json())
    .then(({ data }) => {
      // Destructurez l'objet renvoyé par la réponse pour extraire la propriété 'data'.
      const { content } = data;
      // Affichez le contenu de la blague dans la console.
      console.log(content);
      // Mettez le texte de la blague dans l'élément avec l'ID 'header'.
      header.textContent = content.text_head;
      // Mettez le texte de la blague dans l'élément avec l'ID 'content'.
      // Si le texte est vide, utilisez le texte caché à la place.
      text.textContent =
        content.text !== "" ? content.text : content.text_hidden;
    });
};

// Appelez la fonction getJoke pour afficher une blague dès le chargement de la page.
getJoke();

// Ajoutez un écouteur d'événement pour le clic de souris sur l'ensemble du document.
// Lorsqu'un clic est détecté, appelez à nouveau la fonction getJoke pour obtenir une nouvelle blague.
document.body.addEventListener("click", getJoke);
