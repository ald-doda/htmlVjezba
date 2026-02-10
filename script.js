document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input, textarea");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        let valid = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.boxShadow = "0 0 10px red";
            } else {
                input.style.boxShadow = "0 0 10px #00ffff";
            }
        });

        if (valid) {
            alert("✅ Hvala! Vaša poruka je poslana.");
            form.reset();
        } else {
            alert("⚠️ Molimo popunite sva polja.");
        }
    });
});

const header = document.querySelector("header");
setInterval(() => {
    header.style.textShadow = "0 0 10px #00ffff";
    setTimeout(() => {
        header.style.textShadow = "0 0 5px #00cccc";
    }, 500);
}, 1000);

const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px";
scrollBtn.style.backgroundColor = "#00cccc";
scrollBtn.style.color = "#111";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "6px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
