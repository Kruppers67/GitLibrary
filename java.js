
const openBtn = document.getElementById("openUserForm");
const modalForm = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("inputForm");
const bodybox = document.getElementById("bodybox");



openBtn.addEventListener("click", () => {
    modalForm.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modalForm.style.display = "none";
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("readStatus").value;

    const bookcard = document.createElement("div");

    const readStatusSelect = document.createElement("select");
    readStatusSelect.innerHTML = `
    <option value="Read" ${readStatus === "Read" ? "selected" : ""}>Read</option>
    <option value="Not Read" ${readStatus === "Not Read" ? "selected" : ""}>Not Read</option>
    `

    bookcard.classList.add("book-card");
    bookcard.innerHTML = `
    <h3>${title}</h3>
    <p><strong>Author:</strong> ${author}</p>
    <p><strong>Pages:</strong> ${pages}</p>
    <button class="delete-btn">Remove</button>
    `;
   
    bookcard.appendChild(readStatusSelect);
    readStatusSelect.classList.add("status")
   


    bodybox.appendChild(bookcard);

    bookcard.querySelector(".delete-btn").addEventListener("click", function () {
        bookcard.remove();
    });


inputForm.reset();

modalForm.style.display = "none";
});





