function sumOfDistinctElements(set1, set2) {
    // Combine the sets into a single array
    let result = set1.concat(set2);

    // Use a Set to store distinct elements
    let distinctSet = new Set(result);

    // Calculate the sum of distinct elements
    let sum = 0;
    distinctSet.forEach(element => {
        sum += element;
    });

    return sum;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log("Sum of distinct elements:", result);



//problem 2

function dotProduct(v1, v2) {
    // Calculation of dot product
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

function checkOrthogonality(n, vectors) {
    // Initialize an empty array to store orthogonal results
    let orthogonal = [];

    for (let i = 0; i < n; i++) {
        // Call the dotProduct function
        const ps = dotProduct(vectors[i][0], vectors[i][1]);

        // Check if the dot product is zero
        orthogonal.push(ps === 0);
    }

    return orthogonal;
}

// Example usage:
const vectors = [
    [[1, 0], [0, -1]],  // orthogonal
    [[2, 3], [3, -2]],  // not orthogonal
    [[1, 2, 3], [4, 5, 6]]  // not orthogonal
];

const orthogonalResults = checkOrthogonality(vectors.length, vectors);
console.log("Orthogonal results:", orthogonalResults);