import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.js";

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
        console.log("Error:", error);
    })