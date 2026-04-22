function calculateTransparencyScore(listing, reviews = []) {
    let score = 100; // start from 100 like real systems

    // 1. Price clarity
    if (!listing.price) score -= 25;

    // 2. Tax clarity
    if (!listing.taxRate) score -= 15;

    // 3. Service fee clarity
    if (!listing.serviceFee) score -= 15;

    // 4. Description quality
    if (!listing.description || listing.description.length < 20) {
        score -= 10;
    }

    // 5. Reviews presence
    if (reviews.length === 0) {
        score -= 10;
    }

    // 6. Hidden cost signals (cab service without price)
    if (listing.hasCabService && !listing.cabPrice) {
        score -= 10;
    }

    // 7. Low review count penalty
    if (reviews.length < 3) {
        score -= 5;
    }

    // Normalize to 0–100 range
    return Math.max(0, Math.min(100, score));
}

function getTrustLabel(score) {
    if (score >= 80) return "🟢 Highly Transparent";
    if (score >= 60) return "🟡 Moderately Transparent";
    return "🔴 Low Transparency";
}

module.exports = { calculateTransparencyScore, getTrustLabel };