function fetchBooks() {
  // Return the fetch so CodeGrade tests can access it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((books) => {
      // Only call renderBooks if we are in a browser environment
      if (typeof document !== "undefined" && document.getElementById) {
        renderBooks(books);
      }
    })
    .catch((error) => {
      console.error("Fetch failed:", error);
    });
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  // Check if the DOM element exists before adding children
  if (!bookList) return;

  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}

// Only add event listener if we are in a browser environment
if (typeof document !== "undefined" && document.addEventListener) {
  document.addEventListener("DOMContentLoaded", () => {
    fetchBooks();
  });
}
