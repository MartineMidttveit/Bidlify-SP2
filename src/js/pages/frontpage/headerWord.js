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
        "#F28482", 
        "#7CA59B", 
        "#CAA429", 
        "#F28482", 
        "#7CA59B", 
        "#CAA429", 
        "#F28482", 
        "#7CA59B", 
        "#CAA429", 
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

