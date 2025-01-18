import express from "express";
import { addAnswer, addQuestion, addReplyToReview, addReview, deleteProperty, editProperty, getAdminAllProperties, getAllProperty, getPropertyByUser, getSingleProperty, uploadProperty } from "../controllers/property.controller";
import { authorizeRoles, isAuthentificated } from "../middleware/auth";
import { updateAccessToken } from "../controllers/user.controller";
const propertyRouter = express.Router();

propertyRouter.post(
  "/createProperty",
  updateAccessToken,
  isAuthentificated,
  authorizeRoles("admin"),
  uploadProperty
);
propertyRouter.put(
  "/editProperty/:id",
  updateAccessToken,
  isAuthentificated,
  authorizeRoles("admin"),
  editProperty
);
propertyRouter.get(
  "/getProperty/:id",
  getSingleProperty
);
propertyRouter.get(
  "/getProperties",
  getAllProperty
);

//course content
propertyRouter.put(
  "/addQuestion",
  updateAccessToken,
  isAuthentificated,
  addQuestion
);
propertyRouter.put(
  "/addAnswer",
  updateAccessToken,
  isAuthentificated,
  addAnswer
);
propertyRouter.put(
 "/addReview/:id",
 updateAccessToken,
 isAuthentificated,
 addReview
)
propertyRouter.put(
  "/addReply",
  isAuthentificated,
  updateAccessToken,
  addReplyToReview
)
propertyRouter.get(
  "/getPropertyContent/:id",
  updateAccessToken,
  isAuthentificated,
  getPropertyByUser
);

propertyRouter.get(
  "/get-properties",
  updateAccessToken,
  isAuthentificated,
  authorizeRoles("admin"),
  getAdminAllProperties
);  
propertyRouter.delete(
  "/delete-property/:id",
  updateAccessToken,
  isAuthentificated,
  authorizeRoles("admin"),
  deleteProperty
)
export default propertyRouter;