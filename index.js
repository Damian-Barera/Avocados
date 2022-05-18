const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app")
window
    .fetch(`${baseUrl}/api/avo`)
    .then((response) => response.json())
    .then((responseJson) => {
        allItems = [];
        responseJson.data.forEach ((data) => {
            const image = document.createElement("img");
            image.src = `${baseUrl}${data.image}`;

            const title = document.createElement("h2");
            title.textContent = data.name;
            title.style.color = "blue";

            const price = document.createElement("span");
            price.textContent = data.price;
            
            const container = document.createElement("div");
            container.append(image, title, price);
            container.style.border = "2px solid black";
            allItems.push(container);
        });
        appNode.append(...allItems);
    });

