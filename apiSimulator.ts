import { NetworkError, DataError } from "./error.js";

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.75) {
        resolve([
            { id: 1, name: "Drawer", price: 800 },
            { id: 2, name: "Mattress", price: 1500 },
        ]);
        } else {
        reject(new NetworkError("Failed to fetch product catalog"));
        }
    }, 1000);
    });
};

interface Reviews {
    rating: number;
};

export const fetchProductReviews = (productId: number): Promise<Reviews[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let review: Reviews[] = [{ rating: 4}, {rating: 3}, {rating: 5}];
            if (Math.random() < 0.75) {
                resolve(review); 
            } 
            else {
                reject(new DataError(`Failed to fetch reviews for product ${productId}`));
            } 
        }, 1500);
    });
};

interface Report {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
};

export const fetchSalesReport = (): Promise<Report> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let myReport: Report = {totalSales: 10000000, unitsSold: 20000, averagePrice: 500};
            if (Math.random() < 0.75) {
                resolve(myReport);
            }
            else {
                reject(new NetworkError("Failed to fetch sales report."));
            }
        }, 1000);
    });
};