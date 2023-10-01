var temp;
var arrayNum = 1;
var idx = 0;

var image_link = [];
var book_title = [];
var book_authors = [];
var pdf = [];
var audio_book_mp3 = [];
var book_duration = [];
var describtion = [];

var mainConBook = document.getElementById("mainConBook");

fetch("WebData.txt")
  .then((response) => response.text())
  .then((data) => {
    temp = data.split(/\r?\n/);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === "ENDOFARRAY") {
        arrayNum++;
        idx = 0;
      } else {
        switch (arrayNum) {
          case 1:
            image_link[idx] = temp[i].replace('"', "");
            break;
          case 2:
            book_title[idx] = temp[i];
            break;
          case 3:
            book_authors[idx] = temp[i];
            break;
          case 4:
            pdf[idx] = temp[i];
            break;
          case 5:
            audio_book_mp3[idx] = temp[i];
            break;
          case 6:
            book_duration[idx] = temp[i];
            break;
          case 7:
            describtion[idx] = temp[i];
            break;
        }
        idx++;
      }
    }

    genarateBooksIn(mainConBook, 0, 14, 1);
  });

var books = [];

var bookPreviwe = document.getElementById("bookPreviwe");

function genarateBooksIn(mainDivm, from, to, goInside = false) {
  for (let i = from; i < to; i++) {
    var book = document.createElement("div");
    book.setAttribute("id", `${i}`);
    book.style.width = "290px";
    book.style.height = "fit-content";
    book.style.backgroundColor = "#fff";
    book.style.border = "1px solid rgb(201, 199, 199)";
    book.style.borderRadius = "3px";
    book.style.transform = "scale(.8)";
    book.style.cursor = "pointer";
    book.style.marginTop = "0px";
    book.style.borderRadius = "10px";
    book.style.overflow = "hidden";

    var book_img = document.createElement("img");
    book_img.src = image_link[i];
    book_img.style.width = "290px";
    book_img.style.height = "400px";
    book_img.style.filter = "brightness(70%)";
    book_img.style.transition = "all .5s ease-in-out";

    var book_name = document.createElement("h2");
    book_name.textContent = book_title[i];
    book_name.style.width = "280px";

    book_name.style.textAlign = "center";
    book_name.style.fontSize = "150%";
    book_name.style.padding = "5px";
    book_name.style.margin = "5px";

    var book_author = document.createElement("p");
    book_author.innerHTML = "<small>for </small>" + book_authors[i];
    book_author.style.textAlign = "center";
    book_author.style.paddingBottom = "5px";

    book.appendChild(book_img);
    book.appendChild(book_name);
    book.appendChild(book_author);
    mainDivm.appendChild(book);
    books[i] = book_img;
  }

  for (let i = from; i < to; i++) {
    books[i].addEventListener("mousemove", () => {
      books[i].style.filter = "brightness(100%)";
      books[i].style.boxShadow = "2px 2px 15px #ddd";
    });

    books[i].addEventListener("mouseleave", () => {
      books[i].style.filter = "brightness(70%)";
      books[i].style.boxShadow = "none";
    });

    if (goInside) {
      books[i].onclick = function () {
        get_book(i);
      };
    }
  }

}

document.getElementById("GoBack").addEventListener("click", back);

function back() {
  document.getElementById("main").style.display = "block";
  document.getElementById("booInside").style.display = "none";
  document.getElementById("pdfnAudio").style.display = "none";

  var audio = document.getElementById("audio");
  audio.pause();
}

function get_book(id) {
  document.getElementById("main").style.display = "none";
  document.getElementById("booInside").style.display = "block";

  document.getElementById("img").src = image_link[id];
  document.getElementById("name").textContent = book_title[id];
  document.getElementById("Written").textContent =
    "Written By:" + book_authors[id];
  document.getElementById("Duration").textContent =
    "Duration: " + book_duration[id];
  document.getElementById("Summary").textContent = describtion[id];


  document.getElementById("Readnlisten").addEventListener("click", function () {
    document.getElementById("pdfdata").data = pdf[id];
    document.getElementById("pdfIfram").src = pdf[id];
    var audio = document.getElementById("audio");
    document.getElementById("audioSrc").src = audio_book_mp3[id];
    audio.load();

    document.getElementById("pdfnAudio").style.display = "block";

    const y =
      document.getElementById("pdfnAudio").getBoundingClientRect().top +
      window.scrollY;
    window.scroll({
      top: y - 75,
      behavior: "smooth",
    });
  });
}
