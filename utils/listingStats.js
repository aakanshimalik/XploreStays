const calculateScore = require("./calculateScore");
const { calculateTransparencyScore } = require("./transparency");
const generateScoreReasons = require("./scoreExplanation");

/**
 * Enrich listing with:
 * - avgRating
 * - trust score
 * - final ranking score
 * - human-readable reasons
 */
function enrichListing(listing) {

    const reviews = listing.reviews || [];
    const price = listing.price || 0;

    // ----------------------------
    // 1. Average Rating
    // ----------------------------
    let avgRating = 0;

    if (reviews.length > 0) {
        const total = reviews.reduce((sum, r) => sum + (r.rating || 0), 0);
        avgRating = total / reviews.length;
    }

    // ----------------------------
    // 2. Trust / Transparency Score
    // ----------------------------
    const trustIndex = calculateTransparencyScore(listing, reviews);

    // ----------------------------
    // 3. Final Score (Ranking Engine)
    // ----------------------------
    const result = calculateScore({
        trustIndex,
        avgRating,
        price
    });

    // ----------------------------
    // 4. Human-readable reasons (Step 3)
    // ----------------------------
    const reasons = generateScoreReasons({
        trustIndex,
        avgRating,
        price,
        breakdown: result.breakdown
    });

    // ----------------------------
    // 5. Return enriched listing
    // ----------------------------
    return {
        ...listing.toObject(),
        avgRating,
        trustIndex,
        finalScore: result.finalScore,
        scoreBreakdown: result.breakdown,
        reasons
    };
}

module.exports = enrichListing;