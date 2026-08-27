// The lessons bound to this JS file (mostly the later lessons) were very unclear.
// This file is a hard modification to implement more consistency to its structure.

const backdrop = document.getElementById("backdrop");

const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const cancelAddMovieButton = addMovieModal.querySelector(".modal__actions :first-child");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const addMovieModalInputs = addMovieModal.querySelectorAll("input");

const deleteMovieModal = document.getElementById("delete-modal");
const cancelDeleteMovieButton = deleteMovieModal.querySelector(".btn--passive");
const confirmDeleteMovieButton = deleteMovieModal.querySelector(".btn--danger");

const entryTextSection = document.getElementById("entry-text");

const movies = [];
let selectedMovieId;

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "block";
    }
    else {
        entryTextSection.style.display = "none";
    }
};

const hideBackdrop = () => {
    backdrop.classList.remove("visible");
};

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};

const closeDeleteMovieModal = () => {
    deleteMovieModal.classList.remove("visible");

    hideBackdrop();
}

const confirmDeleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById("movie-list");
    listRoot.children[movieIndex].remove();
    closeDeleteMovieModal();
    updateUI();
}

const showDeleteMovieModal = (movieId) => {
    deleteMovieModal.classList.add("visible");
    toggleBackdrop();
    selectedMovieId = movieId;
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}" />
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener("click", showDeleteMovieModal.bind(null, id));
    const listRoot = document.getElementById("movie-list");
    listRoot.append(newMovieElement);
};

const showAddMovieModal = () => {
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
};

const closeAddMovieModal = () => {
    addMovieModal.classList.remove("visible");

    // Clear inputs
    for (const input of addMovieModalInputs) {
        input.value = "";
    }

    hideBackdrop();
}

const confirmAddMovieHandler = () => {
    const titleValue = addMovieModalInputs[0].value;
    const imageUrlValue = addMovieModalInputs[1].value;
    const ratingValue = addMovieModalInputs[2].value;

    if (!titleValue.trim() || !imageUrlValue.trim() || !ratingValue.trim() || +ratingValue < 1 || +ratingValue > 5 ) {
        alert("Please enter valid values. The rating must be between 1 and 5.");
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeAddMovieModal();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const backDropClickHandler = () => {
    closeAddMovieModal();
    closeDeleteMovieModal();
};


startAddMovieButton.addEventListener("click", showAddMovieModal);
cancelAddMovieButton.addEventListener("click", closeAddMovieModal);
confirmAddMovieButton.addEventListener("click", confirmAddMovieHandler);

cancelDeleteMovieButton.addEventListener("click", closeDeleteMovieModal);
confirmDeleteMovieButton.addEventListener("click", () => {
    confirmDeleteMovieHandler(selectedMovieId);
});

backdrop.addEventListener("click", backDropClickHandler);