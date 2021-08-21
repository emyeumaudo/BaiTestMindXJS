async function api() {
  let html = ``;
  const data = [];
  const resStoryID = await fetch("https://api.shrtco.de/v2/");
}

function rendershort(data) {
  const firstArticleElement = document.getElementsByClassName("short");
  firstArticleElement[0].innerHTML = `
    <div class="form-group">
    <label for="short">Enter a link:</label>
    <a href="${data.url}"
    <input
      type="text"
      class="form-control"
      id="short"
      placeholder="Enter Short URL"
      name="short"
    />
    </a>
</div>
 `;
}
api();
