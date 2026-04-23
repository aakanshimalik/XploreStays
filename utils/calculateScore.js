function calculateScore({ trustIndex, avgRating, price }) {

    // ------------------------
    // 1. Normalize rating (0–5 → 0–100)
    // ------------------------
    const ratingScore = (avgRating / 5) * 100;

    // ------------------------
    // 2. Normalize price (lower price = better score)
    // assuming 0 → 10,000 range
    // ------------------------
    const maxPrice = 20000;
    const priceScore = Math.max(0, 100 - (price / maxPrice) * 100);

    // ------------------------
    // 3. Trust already 0–100
    // ------------------------
    const trustScore = trustIndex;

    // ------------------------
    // 4. Weighted final score
    // ------------------------
    const finalScore =
        (trustScore * 0.4) +
        (ratingScore * 0.4) +
        (priceScore * 0.2);

    return {
        finalScore: Math.round(finalScore),
        breakdown: {
            trustScore: Math.round(trustScore),
            ratingScore: Math.round(ratingScore),
            priceScore: Math.round(priceScore)
        }
    };
}

module.exports = calculateScore;