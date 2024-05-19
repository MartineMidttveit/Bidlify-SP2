import config from "../../config.js";
import displayError from "../../../helpers/displayError.js";

export default async function searchListings(title) {
    try {
        const url = config.BaseURL + `auction/listings/search?q=${title}&_bids=true&_seller=true`;

        console.log(url)

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Noroff-API-Key": config.APIKey
            },
        });

        if (!response.ok) {
            const data = await response.json();

            if (data.errors) {
                displayError(data.errors[0].message);
            }
            throw new Error(data);
        }

        const data = await response.json();

       
        return data.data; 
    } catch (err) {
        console.error(err);
        throw err;
    }
}