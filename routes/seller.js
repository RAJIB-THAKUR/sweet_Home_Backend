const express = require("express");
const router = express.Router();

// const buildingValidator = require("../validators/building");
// const runValidation = require("../validators/validationResult");
const sellerController = require("../controllers/seller");

//-------------------------------------ROUTES-----------------------
//ROUTE-1 : All Building details for particular seller buildingType wise or city wise or both (common API for three queries)
router.get(
  "/seller_buildingDetails_type_City",
  sellerController.seller_buildingDetails_type_City
);
//ROUTE:2 : seller can get Details of users in particular building
router.get("/booking_Details", sellerController.seller_booking_Details);

module.exports = router;
