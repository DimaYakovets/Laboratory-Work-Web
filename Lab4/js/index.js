let hiden = valiform = false;
const goUp = document.getElementById("goUp"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    repPassword = document.getElementById("password-repeat"),
    passMsg = document.getElementById("password-msg"),
    genresMsg = document.getElementById("genres-msg"),
    protagonistMsg = document.getElementById("protagonist-msg"),
    validateBtn = document.getElementById("validate-login"),
    repPassMsg = document.getElementById("rep-password-msg"),
    submitBtn = document.getElementById("submit"),
    price = document.getElementById("price-lable"),
    hours = document.getElementById("hours-lable"),
    quiz = document.getElementById("quiz"),
    cards = document.getElementById("cards"),
    dialog = document.querySelector('dialog');

const data =
[
    {
        title: "Orange",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis at nisi at laoreet. Donec non dolor vel mi eleifend."
    },
    {
        title: "The black hole",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVU7Pf5Eau07YG_hHiGMdwKIjP1iBPWQveZqGzCAcf7lbQ1cbwWdftXlqsRGKMHuR1Q1TbkcRl9ORb4bEvFztUZFL4XCGcZo&usqp=CAU&ec=45732301",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet arcu et odio sagittis lobortis. Nam in maximus elit. Vivamus."
    },
    {
        title: "Bridge",
        src: "https://www.avantixlearning.ca/wp-content/uploads/2020/02/final-picture-after-merge-shapes-intersect-applied-in-PowerPoint.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet arcu et odio sagittis lobortis. Nam in maximus elit. Vivamus."
    }
];

function inputBlur(paramInput, paramLength, msg) {
    if (paramInput.length < paramLength) {
        msg.innerHTML = "Password length must be bigger then eight.";
    }
    else{
        msg.innerHTML = "";
    }
}
function passHandler() {
    inputBlur(password.value, 8, passMsg);
}
function passRepHandler() {
    inputBlur(repPassword.value, 8, repPassMsg);
}
function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        goUp.style.display = "block";
    }
    else {
        goUp.style.display = "none";
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}
function ShowHide() {
    if (hiden) {
        document.getElementById("quiz").style.display = "none";
    }
    else {
        document.getElementById("quiz").style.display = "block";
    }
    hiden = !hiden;
}
function validatePassword() {
    if(password.value !== repPassword.value ){
        repPassMsg.innerHTML = "Password don't match.";
    }
    else { 
        if (password.value === "")
        {
            submitBtn.setAttribute("hidden", "hidden");
            repPassMsg.innerHTML = "Enter password";
        }
        else {
            submitBtn.removeAttribute("hidden");
            repPassMsg.innerHTML = "";
        }
    }
}
function submitQuiz() 
{
    let genres = document.forms["quiz"]["shooter"].checked ||
    document.forms["quiz"]["survival"].checked ||
    document.forms["quiz"]["metroidvania"].checked ||
    document.forms["quiz"]["point-and-click"].checked ||
    document.forms["quiz"]["sandbox"].checked;   

    let pmale = document.forms["quiz"]["protagonist"][0].checked;
    let pfemale = document.forms["quiz"]["protagonist"][1].checked;
    
    if (!genres) {
        genresMsg.innerHTML = "Select genres.";
    }
    else {
        genresMsg.innerHTML = "";
    }

    if(!pmale && !pfemale){
        protagonistMsg.innerHTML = "Select protagonist.";
    } 
    else {
        protagonistMsg.innerHTML = "";
    }
    if (genres && (pmale || pfemale)) {
        dialog.show();
        ShowHide();
    }
    return false;
}
quiz.onsubmit = function() {
    return submitQuiz();
};
function updatePrice(val) {
    price.innerHTML=`Enter minimal price (${val}$)`; 
}
function updateHours(val) {
    hours.innerHTML=`Enter hours count (${val}h)`; 
}
document.getElementById("show-cards").addEventListener("click", function showCards()
{  
    for (const item of data) {
        cards.innerHTML += `<div class="card" style="width: 100%;">
        <img src="${item.src}" class="card-img-top" alt="Image" >
        <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
          <details>
            <summary>Description</summary>
            <p>${item.description}</p>
          </details>
        </div>
      </div>`;
    }
});

document.querySelector('#closeDialog').onclick = function() {
    dialog.close();
}
setInterval(function () {  
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.getHours().toString().padStart(2, "0") + ":" +
    dt.getMinutes().toString().padStart(2, "0") + ":" +
    dt.getSeconds().toString().padStart(2, "0");
}, 500);

window.onscroll = function () { scrollFunction() };
password.addEventListener("blur", passHandler);
repPassword.addEventListener("blur", passRepHandler);
validateBtn.addEventListener("click", validatePassword);