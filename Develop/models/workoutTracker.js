const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const WorkOutTSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    
    exercises: [{
       type: {
           type: String,
           trim: true,
           required: "enter exercise type",
       },
        name: {
            type: String,
            trim: true,
            required: "enter name of exercise"
        },
        duration: {
            type: Number,
            required: "enter minutes"
        },
        weight: {
            type: Number,
            require: "enter weight"
        },
        reps: {
            type: Number,
            require: "enter reps"
        },
        sets: {
            type: Number,
            require: "enter sets"
        }
    }]

});

const WorkOutT = mongoose.model("WorkOutT", WorkOutTSchema);

module.exports = WorkOutT;
