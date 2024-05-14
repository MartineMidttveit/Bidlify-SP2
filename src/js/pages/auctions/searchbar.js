import searchListings from "../../api/auth/requests/searchListings.js";
import thumbnail from "../../templates/listings/thumbnails/index.js";
import displayError from "../../helpers/displayError.js";
import displayListings from "./displayListings.js";

export default function searchBar(allActive) {
    const searchInput = document.querySelector("#searchInput");
    const searchButton = document.querySelector("#searchButton");
    const allListingsContainer = document.querySelector("#allListings");
    const amountOfListings = document.querySelector("#amountOfListings");
    const noResults = document.querySelector(".noResults");

    const handleSearch = async () => {

        try {
            const listings = await searchListings(searchInput.value);
            const searchTerm = searchInput.value.toLowerCase(); 
            const filteredListings = listings.filter(listing =>
                listing.title.toLowerCase().includes(searchTerm)
            );

            allListingsContainer.innerHTML = "";
            noResults.classList.add("hidden");
            amountOfListings.textContent = "";

            if (filteredListings.length > 0) {
                filteredListings.forEach(listing => {
                    const listingElement = thumbnail(listing);
                    allListingsContainer.appendChild(listingElement);
                });
                amountOfListings.textContent = `(${filteredListings.length} listings)`;
            } else {
                noResults.textContent = `No results found for "${searchInput.value}"`;
                noResults.classList.remove("hidden");
                noResults.classList.add("flex");
            }
        } catch (error) {
            console.error(error);
            displayError("An error occurred while fetching listings.");
        }
    };

    searchInput.addEventListener("change", () => {
        if(searchInput.value === "") {
            allListingsContainer.append(displayListings(allActive))
        }
    })

    searchButton.addEventListener("click", handleSearch);

    searchInput.addEventListener("keyup", event => {
        if (event.key === "Enter") {
            handleSearch();
        }
    });
}