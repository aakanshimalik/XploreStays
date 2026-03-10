const Listing = require("../models/listing");

module.exports.index = async(req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req, res)=> {
    res.render("listings/new.ejs");
};

module.exports.showListing = async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listings"); 
    }
    return res.render("listings/show.ejs", {listing});
};

module.exports.createListing = async (req, res, next) => {
    try {
        req.body.listing.hasCabService = req.body.listing.hasCabService === "true";
        if (!req.body.listing.hasCabService) req.body.listing.cabPrice = 0;
        
        let url = req.file.path;
        let filename = req.file.filename;

        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        // newListing.image = {url, filename};
        if (req.file) {
                newListing.image = {
                    url: req.file.path,
                    filename: req.file.filename
                };
        }

        await newListing.save();
        req.flash("success", "New Listing Created!");
        res.redirect("/listings");   
    } catch (e) {
        next(e);
    }
};

module.exports.renderEditForm = async(req, res)=> {
     let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs",{listing, originalImageUrl});
};

module.exports.updateListing = async (req,res) =>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }    

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req,res)=> {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing );
    if (!deletedListing) {
        req.flash("error", "Listing not found or already deleted.");
        return res.redirect("/listings");
    }
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};

module.exports.index = async (req, res) => {
    try {
        const { q } = req.query;
        let listings = [];

        if (q) {
            listings = await Listing.find({
                $or: [
                    { title: { $regex: q, $options: 'i' } },
                    { description: { $regex: q, $options: 'i' } },
                    { location: { $regex: q, $options: 'i' } },
                    { country: { $regex: q, $options: 'i' } }
                ]
            });
        } else {
            listings = await Listing.find({});
        }

        res.render("listings/index", { allListings: listings, searchTerm: q });
    } catch (err) {
        console.error("Error fetching listings:", err);
        res.status(500).send("Internal Server Error");
    }
};