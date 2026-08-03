const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");
const h1Regex = /^#\s+(.*)$/gm;
const h2Regex = /^##\s+(.*)$/gm;
const h3Regex = /^###\s+(.*)$/gm;
const boldRegex = /(?:\*\*|__)(.*?)(?:\*\*|__)/gm;
const italicRegex = /(?:\*|_)(.*?)(?:\*|_)/gm;
const imageRegex = /!\[(.*)\]\((.*?)\)/gm;
const linkRegex = /\[(.*)\]\((.*?)\)/gm;
const quoteRegex = /^>\s+(.*)/gm;
let inputValue;

markdownInput.addEventListener("input", ()=> {
  htmlOutput.innerText = convertMarkdown();
  preview.innerHTML = convertMarkdown();
});

function convertMarkdown(){
  let html = markdownInput.value || "";
  
  html = html.replace(h1Regex, '<h1>$1</h1>');
  html = html.replace(h2Regex, '<h2>$1</h2>');
  html = html.replace(h3Regex, '<h3>$1</h3>');
  html = html.replace(boldRegex, '<strong>$1</strong>');
  html = html.replace(italicRegex, '<em>$1</em>');
  html = html.replace(imageRegex, '<img alt="$1" src="$2">');
  html = html.replace(linkRegex, '<a href="$2">$1</a>');
  html = html.replace(quoteRegex, '<blockquote>$1</blockquote>');

  return html;
}

