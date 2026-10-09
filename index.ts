import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.js";
import { NetworkError, DataError } from "./error.js";

fetchProductCatalog()
    .then((catalog) => {
        console.log("Fetched Catalog:", catalog);
        return Promise.all(catalog.map((product) => fetchProductReviews(product.id)));
    })
    .then(async () => {
        const salesReport = await fetchSalesReport();
        console.log("Sales Report:", salesReport);
    })
    .catch((error) => {
        if (error instanceof NetworkError) {
            console.error("Network Error:", error.message);
        } 
        else {
            console.error("Data Error:", error.message);
        }
    })
    .finally(() => {
        console.log("All API calls have been attempted.");
    });