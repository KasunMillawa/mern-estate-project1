import Listing from "../models/listing.model.js";
import { errHandler } from "../utils/error.js";

export const createListing = async ( req , res , next) => {

    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);    
    } catch (error) {
        next(error);
    }
     

}; 

export const deleteListing = async (req , res , next) => {
    const listing = await Listing.findById(req.params.id);

    if(!listing) {
        return next(errHandler(404, 'Listing not fount'));
    }

    if(req.user.id !== listing.userRef) {
        return next(errHandler(401, 'you can only update your own listing..'));
    }

    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json('Your listing has been deleted');
    } catch (error) {
        next(error);
    }

};

export const updateListing = async (req , res , next) => {
    const listing = await Listing.findById(req.params.id);
    if(!listing) {
        return next(errHandler(404, 'listing not found'));
    }

    if(req.user.id !== listing.userRef) {
        return next(errHandler(401, 'you can only update your own listings'));
    }

    try {
        const updateListing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.status(200).json(updateListing); 
    } catch (error) {
        
    }
};