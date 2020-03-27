const router = require("express").Router();
const WorkOutT = require("../models/workoutTracker.js");

router.post("/api/workouts", ({ body }, res) => {
  WorkOutT.create(body)
    .then(dbWorkOutT => {
      res.json(dbWorkOutT);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
    //       res.status(400).json(err);
    //     });
    // });
    // .sort({ date: -1 })
    
    router.get("/api/workouts", (req, res) => {
      WorkOutT.find()
        .then(dbWorkOutT => {
          res.json(dbWorkOutT);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });

module.exports = router;
