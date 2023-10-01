var text = [
  "Book to listen ",
  "We help you to Listen to your books ",
  "Dear, We glad to use our website and our service ",
];

var idx = 0;
var msg = 0;

typingEf = () => {
  document.getElementById("note").innerHTML =
    "Note: " + text[msg].substring(0, idx) + "<span>\u25ae</span>";
  idx++;
  if (idx != text[msg].length) {
    if (text[msg][idx - 1] == " ") {
      setTimeout(typingEf, 200);
    } else {
      setTimeout(typingEf, 50);
    }
  }
  if (idx == text[msg].length) {
    msg++;
    idx = 0;
    setTimeout(typingEf, 3500);
  }
};

window.addEventListener("load", typingEf);

window.onscroll = () => {
  stikyheader();
};

var home = document.getElementById("home");
var sticky = home.offsetTop;

var header = document.getElementById("header");
var logoHeader = document.getElementById("logoHeader");

stikyheader = () => {
  if (window.pageYOffset > sticky + 300) {
    header.style.position = "fixed";
    header.style.transition = "all 1s ease";
    header.style.backgroundColor = "rgba(118, 173, 255, .8)";
    logoHeader.style.visibility = "visible";
  }
  if (window.pageYOffset < 200) {
    header.style.position = "absolute";
    header.style.backgroundColor = "rgba(118, 173, 255, 0)";
    logoHeader.style.visibility = "hidden";
  }
};

stikyheader();

/******************************************/

var formArray = [
  [document.getElementById("fn"), document.getElementById("pfn")],
  [document.getElementById("ln"), document.getElementById("pln")],
  [document.getElementById("email"), document.getElementById("pemail")],
  [document.getElementById("password"), document.getElementById("ppass")],
];

for (let i = 0; i < 4; i++) {
  formArray[i][0].addEventListener("focus", () => {
    var p = formArray[i][1];
    p.style.transition = "all .5s ease";
    p.style.fontSize = "10px";
    p.style.bottom = "110px";
    p.style.color = "#000";
  });

  if (formArray[i][0].value.length > 0) {
    var p = formArray[i][1];
    p.style.transition = "all .5s ease";
    p.style.fontSize = "10px";
    p.style.bottom = "110px";
    p.style.color = "#000";
  }

  formArray[i][0].addEventListener("blur", () => {
    let v = formArray[i][0].value;
    if (v.length == 0) {
      var p = formArray[i][1];
      p.style.transition = "all .5s ease";
      p.style.fontSize = "1.2rem";
      p.style.position = "relative";
      p.style.bottom = "100px";
      p.style.color = "#fff";
    }
  });
}

/***************** *books* **************************/

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

var bookPreviwe = document.getElementById("bookPreviwe");

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
            image_link[idx] = temp[i];
            break;
          case 2:
            book_title[idx] = temp[i - 1];
            break;
          case 3:
            book_authors[idx] = temp[i - 1];
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

    genarateBooksIn(bookPreviwe, 1, 7, 0);
  });

var books = [];

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
  }
}
