const expect = chai.expect;

describe("Form validation", function () {
  describe("when form is blank", function () {
    before(function () {
      const form = document.querySelector("#searchForm");
      const event = new window.Event("submit");
      form.dispatchEvent(event);
    });

    after(function () {
      const error = document.querySelector("#searchError");
      const form = document.querySelector("#searchForm");
      if (error) {
        form.removeChild(error);
      }
    });

    it('should create error element with id "searchError"', function () {
      const error = document.querySelector("#searchError");
      expect(error).to.not.be.null;
    });

    it('should create error element with class named "error"', function () {
      const error = document.querySelector("#searchError");
      expect(error.className).to.equal("error");
    });

    it('should create error element with text "Please enter a search term"', function () {
      const error = document.querySelector("#searchError");
      expect(error.innerHTML).to.equal("Please enter a search term");
    });
  });

  describe("when form contains only whitespace", function () {
    before(function () {
      const form = document.querySelector("#searchForm");
      const searchInput = document.querySelector("#searchTerm");
      searchInput.value = "    ";
      const event = new window.Event("submit");
      form.dispatchEvent(event);
    });

    after(function () {
      const error = document.querySelector("#searchError");
      const form = document.querySelector("#searchForm");
      if (error) {
        form.removeChild(error);
      }
    });

    it('should create error element with id "searchError"', function () {
      const error = document.querySelector("#searchError");
      expect(error).to.not.be.null;
    });

    it('should create error element with class named "error"', function () {
      const error = document.querySelector("#searchError");
      expect(error.className).to.equal("error");
    });

    it('should create error element with text "Please enter a search term"', function () {
      const error = document.querySelector("#searchError");
      expect(error.innerHTML).to.equal("Please enter a search term");
    });
  });
});

describe("Search function", function () {
  describe("when the search term is not found", function () {
    before(function () {
      const form = document.querySelector("#searchForm");
      const searchInput = document.querySelector("#searchTerm");
      searchInput.value = "gumdrop";
      const event = new window.Event("submit");
      form.dispatchEvent(event);
    });

    after(function () {
      const articles = document.querySelectorAll("article");
      for (let article of articles) {
        article.classList.remove("hidden");
      }
      const searchInput = document.querySelector("#searchTerm");
      searchInput.value = "";
    });

    it("should not display an error message", function () {
      const error = document.querySelector("#searchError");
      expect(error).to.be.null;
    });

    it("should display no articles", function () {
      const hiddenArticles = document.querySelectorAll(".hidden");
      expect(hiddenArticles.length).to.equal(8);
    });
  });

  describe("when the search term is found", function () {
    before(function () {
      const form = document.querySelector("#searchForm");
      const searchInput = document.querySelector("#searchTerm");
      searchInput.value = "Art";
      const event = new window.Event("submit");
      form.dispatchEvent(event);
    });

    after(function () {
      const articles = document.querySelectorAll("article");
      for (let article of articles) {
        article.classList.remove("hidden");
      }
      const searchInput = document.querySelector("#searchTerm");
      searchInput.value = "";
    });

    it("should not display an error message", function () {
      const error = document.querySelector("#searchError");
      expect(error).to.be.null;
    });

    it("should display articles partially containing the search term", function () {
      const shownArticles = document.querySelectorAll("article:not(.hidden)");
      expect(shownArticles.length).to.equal(4);
    });

    it("should hide articles not partially containing the search term", function () {
      const hiddenArticles = document.querySelectorAll(".hidden");
      expect(hiddenArticles.length).to.equal(4);
    });
  });

  describe("when the search term case is different", function () {
    before(function () {
      const form = document.querySelector("#searchForm");
      const searchInput = document.querySelector("#searchTerm");
      searchInput.value = "art";
      const event = new window.Event("submit");
      form.dispatchEvent(event);
    });

    after(function () {
      const articles = document.querySelectorAll("article");
      for (let article of articles) {
        article.classList.remove("hidden");
      }
      const searchInput = document.querySelector("#searchTerm");
      searchInput.value = "";
    });

    it("should not display an error message", function () {
      const error = document.querySelector("#searchError");
      expect(error).to.be.null;
    });

    it("should display articles partially containing the search term", function () {
      const shownArticles = document.querySelectorAll("article:not(.hidden)");
      expect(shownArticles.length).to.equal(4);
    });

    it("should hide articles not partially containing the search term", function () {
      const hiddenArticles = document.querySelectorAll(".hidden");
      expect(hiddenArticles.length).to.equal(4);
    });
  });
});
