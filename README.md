# XploreStays 🏡

[Live Demo](https://xplorestays.onrender.com/listings) | [GitHub Repo](https://github.com/aakanshimalik/XploreStays)

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

---

## 🧠 Problem Solving Approach

XploreStays reimagines the vacation rental experience by focusing on pricing transparency and trustworthy reviews — two areas where traditional platforms like Airbnb often fall short. A common user frustration is not knowing the true cost upfront or whether ratings reflect reality. To solve this, I introduced a dual-rating system: one for Quality and another for Transparency, allowing guests to rate both the experience and the clarity of the listing.

Additionally, the platform breaks down the full price — including base rate, taxes, and service fees — so users know exactly what they’re paying for. While some hosts may worry that full transparency could expose higher prices, we address this by encouraging justifications for premium pricing (e.g. unique amenities, prime location, or luxury service), helping build trust rather than hiding costs. This approach empowers both guests and hosts and creates a more open, fair, and informed rental marketplace.

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

## 🔐 Demo Login

Use the following test account to explore:

**Owner (Host):**
- Email: demo@gamil.com
- Username: demo
- Password: demo

## Author
  Aakanshi Malik
  aakanshimalik54@gmail.com
