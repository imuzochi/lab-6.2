export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.75) {
        resolve([
            { id: 1, name: "Drawer", price: 800 },
            { id: 2, name: "Mattress", price: 1500 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
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
                reject("Failed to fetch reviews for product ID ${productId}");
            } 
        }, 1500);
    });
};