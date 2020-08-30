window.addEventListener("load", function () {
  const form = document.querySelector("#searchForm");
  const searchInput = document.querySelector("#searchTerm");
  const event = new window.Event("submit");

  const messages = [];
  const messageElements = {};

  // test the empty form
  form.dispatchEvent(event);
  messages.push("<h3>Form Validation</h3>");
  let error = document.querySelector("#searchError");
  if (!error) {
    messages.push(
      '<div class="fail">Expect error element with id "searchError" when form is empty</div>'
    );
  } else {
    messages.push(
      '<div class="pass">Expect error element with id "searchError" when form is empty</div>'
    );
    messages.push(
      (error.className === "error"
        ? '<div class="pass">'
        : '<div class="fail">') +
        'Expect error element with class named "error" when form is empty</div>'
    );

    messages.push(
      (error.innerHTML === "Please enter a search term"
        ? '<div class="pass">'
        : '<div class="fail">') +
        'Expect error element to contain the text "Please enter a search term"</div>'
    );
  }

  // Test blank form
  searchInput.value = "  ";
  form.dispatchEvent(event);

  error = document.querySelector("#searchError");
  if (!error) {
    messages.push(
      '<div class="fail">Expect error if form is filled with whitespace</div>'
    );
  } else {
    messages.push(
      '<div class="pass">Expect error if form is filled with whitespace</div>'
    );
  }

  // test search with no results

  messages.push("<h3>Search with no results</h3>");

  searchInput.value = "gumdrop";
  form.dispatchEvent(event);

  error = document.querySelector("#searchError");
  if (!error) {
    messages.push(
      '<div class="pass">Expect no error if form in not empty</div>'
    );

    const list1 = Array.from(document.querySelectorAll("article"));
    const visible = list1.some((item) => item.style.display === "block");
    messages.push(
      (visible ? '<div class="fail">' : '<div class="pass">') +
        "Expect no articles to be displayed if search term does not match titles</div>"
    );
  } else {
    messages.push(
      '<div class="fail">Expect no error if form in not empty</div>'
    );
  }

  // test search with results
  messages.push("<h3>Search with results</h3>");

  searchInput.value = "Art";
  form.dispatchEvent(event);

  const list2 = document.querySelectorAll(".hidden");
  messages.push(
    (list2.length === 4 ? '<div class="pass">' : '<div class="fail">') +
      "Expect to find titles that partially match</div>"
  );

  searchInput.value = "tut";
  form.dispatchEvent(event);

  const list3 = document.querySelectorAll(".hidden");
  messages.push(
    (list3.length === 4 ? '<div class="pass">' : '<div class="fail">') +
      "Expect to find titles that partially match and are case insensitive</div>"
  );
  messages.push(
    (list3.length === 4 ? '<div class="pass">' : '<div class="fail">') +
      "Expect to clear previous searches</div>"
  );

  searchInput.value = "";
  for (let item of list3) {
    item.classList.remove("hidden");
  }

  const body = document.querySelector("body");
  const testMessagesText = document.createElement("div");
  testMessagesText.classList.add("messages");
  testMessagesText.innerHTML = messages.join("");
  body.appendChild(testMessagesText);
});
