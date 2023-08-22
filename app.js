const btnEl = document.getElementById("get-activity");
let activityEL = document.getElementById("activity");
let titleEl = document.getElementById("title");
let logoEl = document.querySelector(".logo");

btnEl.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            activityEL.textContent = data.activity;
            titleEl.textContent = `HappyBOT`;
            titleEl.classList.add("happy-title");
            document.body.classList.add("happy-bg");
            logoEl.src = `img/happy.png`; 
        })
})