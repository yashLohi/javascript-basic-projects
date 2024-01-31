// set inital Count

let count = 0;

// select value and btns
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener('click', function (e) {
        // console.log(e.currentTarget);
        // console.log(e.currentTarget.classList);  // get the class of element
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) value.style.color = "green";

        if (count < 0) value.style.color = "red";

        if (count === 0) value.style.color = "black";


        value.textContent = count;
    })
});