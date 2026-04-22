const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports.generateInsight = async (listing, reviews, score) => {
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    });

    const reviewText = reviews.length
        ? reviews.map(r => r.comment).join("\n")
        : "No reviews available";

    const prompt = `
Analyze this rental listing for transparency.

Price: ${listing.price}
Tax Rate: ${listing.taxRate}
Service Fee: ${listing.serviceFee}
Overall Score: ${score}

User Reviews:
${reviewText}

Give:
- 2 pros
- 1 warning
- short conclusion
`;

    // Retry logic (handles Gemini 503 errors)
    for (let i = 0; i < 3; i++) {
        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return response.text();
        } catch (err) {
            console.log(`AI attempt ${i + 1} failed:`, err.message);
            await new Promise(res => setTimeout(res, 1000 * (i + 1)));
        }
    }

    // Final fallback if all retries fail
    return "🧠 AI insight is temporarily unavailable due to high demand. Please refresh or try again later.";
};