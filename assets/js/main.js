function random_quote() {
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const tag2 = document.getElementById("tag2");
    const url = "https://api.api-ninjas.com/v1/quotes?category";
    const key = "WBsmzXyBguvFX5fLv4mbcQ==pJJf096FcqkuS93S";

    fetch(url, {
        method: "GET",
        withCredentials: true,
        headers: {
            'X-Api-Key': key,
            "Content-Type": "application/json"
        }

    })
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            author.innerHTML = data[0].author
            tag2.innerHTML = data[0].category
            quote.innerHTML = `"${data[0].quote}"`
        })
        .catch(function (error) {
            console.log(error);
        });
}

function copy_clip() {
    let copyText = document.getElementById("quote");


    navigator.clipboard.writeText(copyText.textContent);
    alert("Copied the text: " + copyText.textContent);
}