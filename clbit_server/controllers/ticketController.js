const Ticket = require("../models/ticketModel");

exports.getAll = (req, res) => {
  Ticket.find()
    .then((allTicket) => {
      res.status(200).json({
        success: true,
        Ticket: allTicket,
      });
    })
    .catch((err) =>
      res.status(500).json({
        success: false,
      })
    );
};

exports.createTicket = async (req, res) => {
  const { createName, totalStudentNumber } = req.body;
  const ticket = new Ticket({
    CreatedName: createName,
    TotalStudentNumber: totalStudentNumber,
  });

  return ticket
    .save()
    .then((newTicket) => {
      return res.status(201).json({
        success: true,
        message: "New ticket created successfully",
        Course: newTicket,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
};
