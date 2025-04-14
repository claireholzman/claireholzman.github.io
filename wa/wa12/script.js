const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const spinner = document.getElementById("spinner");
const tweetBtn = document.getElementById("tweet-quote");

async function getQuote() {
  spinner.style.display = "block";
  quoteText.textContent = "";
  authorText.textContent = "";

  const colors = ['#FFDEE9', '#B5FFFC', '#D5FFB7', '#FFF1BA', '#C7CEEA'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `— ${data.author}`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${data.content}" — ${data.author}`)}`;
  } catch (error) {
    console.error("Fetch error:", error);
    quoteText.textContent = "Oops! Something went wrong.";
    authorText.textContent = "";
  } finally {
    spinner.style.display = "none";
  }
}

document.getElementById("new-quote").addEventListener("click", getQuote);
tweetBtn.addEventListener("click", () => {
  tweetBtn.setAttribute("target", "_blank");
});

getQuote();

