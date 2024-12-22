document.addEventListener("DOMContentLoaded", () => {
    const news = document.getElementById("news");
    const API_URL = "http://localhost:8000/home";

    async function getNews() {
        try {
            console.log("Отправка запроса...");
            const response = await fetch(API_URL)

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
            }
            const data = (await response.json())["news"] || []
            news.innerHTML = ''
            data.forEach(el => {
                const news_unit = document.createElement("div")
                news_unit.className = "news-container"

                news_unit.innerHTML = `
                    <a>${el.name}</a>
                    <p>${el.date}</p>
                    ${el.text}`;
                news.appendChild(news_unit)
            });
            console.log("OK!")
        } catch (error) {
            console.log("gkfslkfms")
            console.error("Ошибка при загрузке контактов:", error);
            news.innerHTML = `<p>Ошибка загрузки данных!</p>`
        }
    }
    getNews();
});
