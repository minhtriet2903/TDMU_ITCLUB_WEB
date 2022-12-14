const express = require("express");
const TicketController = require("../controllers/ticketController");

const router = express.Router();

router.get("/ticket", TicketController.getAll);
router.post("/ticket", TicketController.createTicket);

module.exports = router;
