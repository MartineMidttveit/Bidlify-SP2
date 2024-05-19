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
        "#932F3A", 
        "#485867", 
        "#C18D5F", 
        "#932F3A", 
        "#485867", 
        "#C18D5F", 
        "#932F3A", 
        "#485867", 
        "#C18D5F", 
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

