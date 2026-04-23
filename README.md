# XploreStays 🏡

[Live Demo](https://xplorestays.onrender.com/) | [GitHub Repo](https://github.com/aakanshimalik/XploreStays)

A full‑stack Airbnb‑style web app built using MVC architecture, with a focus on **transparency** — showing full price breakdowns and dual ratings (Quality + Transparency).

---

## Features

- Users can **add listings** with title, description, location, country, nightly price, tax rate, service fee, and images.  
- Every listing displays a **transparent pricing breakdown**: base price + tax + service fee = total.
- **Search** functionality allows filtering by title, description, location, or country (case-insensitive).
- **Review system**: users can leave both a **Quality** rating and a **Transparency** rating, plus a comment.
- **User authentication & authorization**:
  - Sign up, log in, log out.
  - Only listing owners can edit or delete their own listings.
- MVC structure (Models, Views, Controllers) for clean separation of concerns.
- Image uploads handled via (e.g.) Cloudinary + Multer.
- Validation using Joi schemas.

- 🧠 **AI-powered Transparency Analysis (Gemini API)**:
  - Generates intelligent insights for each listing based on price, taxes, reviews, and overall structure.

---
## 🎯 Problem Statement

Traditional booking platforms lack transparency in pricing and trust evaluation, forcing users to manually judge listings.

XploreStays solves this by introducing:
- Transparent pricing breakdowns
- Trust-based ranking system
- AI-assisted listing evaluation

---

## 🧠 Problem Solving Approach

XploreStays reimagines the vacation rental experience by focusing on pricing transparency and trustworthy listings — areas where traditional platforms often lack clarity.

To solve this, I built a **Weighted Smart Ranking System (0–100)** that evaluates listings using normalized signals:

- Trust Score (verification + transparency level)
- User Rating (review-based quality signal)
- Price Fairness (relative value scoring)
- Listing Completeness (data availability)

This ensures users can quickly understand how transparent a listing is instead of manually analyzing details.

To further enhance user experience, I integrated the **Google Gemini API** to generate AI-powered insights for each listing. These insights provide human-like analysis such as pros, concerns, and overall trust evaluation.

Since AI responses may fail due to rate limits or high demand, I implemented a **fallback system and retry mechanism**, ensuring the application remains stable and always returns meaningful output.

This combination of rule-based scoring + AI analysis creates a more intelligent and real-world-like marketplace experience.


---

## 🧠 System Design Highlights

- Modular scoring pipeline (data → enrichment → ranking → UI)
- Separation of concerns (controllers vs utility logic)
- Stateless ranking engine (recomputable anytime)
- Hybrid AI + rule-based decision system
- Explainable AI-style output ("Why this score")

--- 

## Tech Stack

| Layer         | Technologies                         |
|----------------|--------------------------------------|
| Backend        | Node.js, Express                     |
| Database       | MongoDB, Mongoose                    |
| Views / Templates | EJS + partials / layouts        |
| Authentication | Passport.js + sessions               |
| Validation     | Joi                                  |
| File Uploads   | Multer + Cloudinary                   |
| Hosting        | Render                                |

---

## 🧠 AI & Intelligence Layer

- Integrated Google Gemini API to generate intelligent listing insights
- AI analyzes pricing, reviews, and transparency signals
- Built deterministic fallback system to ensure reliability during API failures
- Combined rule-based Trust Index + AI reasoning for hybrid intelligence

## Getting Started (Local Setup)

1. Clone the repo:

   ```bash
   git clone https://github.com/aakanshimalik/XploreStays.git
   cd XploreStays
   
2. Install dependencies:
   ```bash
   npm install

3. Create a .env file in the root with:
   ```bash
   ATLASDB_URL=<your mongodb atlas connection string>
   CLOUDINARY_CLOUD_NAME=<your cloud name>
   CLOUDINARY_KEY=<your cloudinary key>
   CLOUDINARY_SECRET=<your cloudinary secret>
   SECRET=<your session secret>

4. Start the app (development):
   ```bash
   npx nodemon app.js

5. Visit in browser at: http://localhost:8080


## Usage & Screenshots

<img width="1916" height="921" alt="image" src="https://github.com/user-attachments/assets/00de1d42-53d1-4307-846c-d715fea7235e" />
<img width="1915" height="926" alt="image" src="https://github.com/user-attachments/assets/ebc567ef-3775-4e94-9617-45046834a3bf" />
<img width="1914" height="921" alt="image" src="https://github.com/user-attachments/assets/ee280cb5-ee20-4384-977a-2e67bbc202cd" />

- Homepage / Index: browse all listings or search.

- Show Page: see listing details, transparent pricing, reviews, and review form if logged in.

- New / Edit Listing: for owners to manage their listings.

- Authentication: sign up / login flows.

## Notes & Limitations

- The map feature is not active :- I decided not to include a map feature to avoid using APIs that require credit card details. Instead, I focused on building trust-based features like Quality and Transparency ratings which directly address pain points users face when booking stays.If needed , a future version could easily support map integration.

- For production, make sure SECRET, DB credentials, and Cloudinary credentials are secure and not committed to the repo.
- AI-generated insights use Google Gemini API with a fallback system that ensures consistent rule-based analysis when external API limits are reached.

## 🔐 Demo Login

Use the following test account to explore:

**Owner (Host):**
- Email: demo@gmail.com
- Username: demo
- Password: demo

## Author
  Aakanshi Malik
  aakanshimalik54@gmail.com

## Lisence
  This project is licensed under the MIT License.
