import express from "express";
import {
  addTicket,
  getTickets,
  updateTicket,
  deleteTicket,
  getTicketsByName,
} from "../controllers/tickets.js";
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/", getTickets);
router.post("/",addTicket);
router.patch("/:id",updateTicket);
router.post("/delete", deleteTicket);

router.get("/search", auth, getTicketsByName);
export default router;
