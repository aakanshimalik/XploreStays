function generateScoreReasons({ trustIndex, avgRating, price, breakdown }) {
    const reasons = [];

    // Trust
    if (trustIndex > 80) {
        reasons.push("High trust due to verified listing details");
    } else if (trustIndex < 40) {
        reasons.push("Low trust due to missing or unclear ownership information");
    }

    // Rating
    if (avgRating >= 4) {
        reasons.push(`Strong user rating (${avgRating.toFixed(1)}/5)`);
    } else if (avgRating > 0) {
        reasons.push(`Moderate user rating (${avgRating.toFixed(1)}/5)`);
    } else {
        reasons.push("No user reviews yet");
    }

    // Price logic (example baseline only)
    if (price > 10000) {
        reasons.push("Price is higher than average listings in this category");
    } else if (price < 3000) {
        reasons.push("Good value pricing compared to similar listings");
    }

    return reasons;
}

module.exports = generateScoreReasons;