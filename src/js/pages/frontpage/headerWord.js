export default function headerWord() {
    const items = document.querySelector(".header-word");
    const word = [
        "furniture",
        "artwork",
        "watches",
        "toys",
        "plants",
        "books",
        "clothes",
        "shoes",
        "electronics"
    ];

    const colors = [
        "#D56776", // Red
        "#3B61BA", // Yellow
        "#5D897E", // Green
        "#D56776", // Red
        "#3B61BA", // Yellow
        "#84A59D", // Green
        "#D56776", // Red
        "#3B61BA", // Yellow
        "#84A59D", // Green
    ];
 
    let index = 0;

    function headerWord(index) {
        items.textContent = word[index];
        items.style.color = colors[index];
    }

    setInterval(() => {
        index++;

        if(index >= word.length) {
            index = 0;
        }
        headerWord(index);
    }, 1700);
}

