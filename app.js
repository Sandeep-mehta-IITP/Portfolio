
window.dataLayer = window.dataLayer || [];
function a() {
    dataLayer.push(arguments)
}
a(" js", new Date);
a("config", "G-LR9JE5GPDY");
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("astronav-menu").addEventListener("click", () => {
        [...document.querySelectorAll(".astronav-toggle")].forEach(e => {
            e.classList.toggle("hidden")
        }
        )
    }
    );
    const o = document.querySelectorAll(".astronav-dropdown");
    o.forEach(e => {
        const n = e.querySelector("button");
        n.addEventListener("click", r => {
            e.classList.toggle("open"),
            e.setAttribute("aria-expanded", e.getAttribute("aria-expanded") === "true" ? "false" : "true"),
            e.hasAttribute("open") ? e.removeAttribute("open") : e.setAttribute("open", ""),
            n.nextElementSibling.classList.toggle("hidden"),
            Array.from(o).filter(t => t !== e).forEach(t => {
                t.classList.remove("open"),
                t.removeAttribute("open"),
                t.setAttribute("aria-expanded", "false"),
                t.querySelector(".dropdown-toggle").classList.add("hidden")
            }
            ),
            r.stopPropagation()
        }
        )
    }
    ),
    document.addEventListener("click", () => {
        o.forEach(e => {
            e.classList.remove("open"),
            e.removeAttribute("open"),
            e.setAttribute("aria-expanded", "false")
        }
        ),
        document.querySelectorAll(".dropdown-toggle").forEach(e => e.classList.add("hidden"))
    }
    )
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        form.classList.add("was-validated");

        if (!form.checkValidity()) {
            form.querySelectorAll(":invalid")[0].focus();
            return;
        }

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        result.innerHTML = "Sending...";

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.classList.add("text-green-500");
                    result.innerHTML = json.message;
                } else {
                    result.classList.add("text-red-500");
                    result.innerHTML = json.message;
                }
            })
            .catch((error) => {
                result.classList.add("text-red-500");
                result.innerHTML = "Something went wrong!";
            })
            .then(function () {
                form.reset();
                form.classList.remove("was-validated");
                setTimeout(() => {
                    result.style.display = "none";
                }, 5000);
            });
    });
});

// contact page ka logic

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        form.classList.add("was-validated");

        if (!form.checkValidity()) {
            form.querySelectorAll(":invalid")[0].focus();
            return;
        }

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        result.innerHTML = "Sending...";

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.classList.add("text-green-500");
                    result.innerHTML = json.message;
                } else {
                    result.classList.add("text-red-500");
                    result.innerHTML = json.message;
                }
            })
            .catch((error) => {
                result.classList.add("text-red-500");
                result.innerHTML = "Something went wrong!";
            })
            .then(function () {
                form.reset();
                form.classList.remove("was-validated");
                setTimeout(() => {
                    result.style.display = "none";
                }, 5000);
            });
    });
});
