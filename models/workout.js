const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
day: {
        
type: Date,
default: Date.now
    },


exercises: [
    //This will allow the user to make a custom workout 
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise name"
            }, 
            duration:  {
                type: Number,
                trim: true,
                required: "Enter total time of workout"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]

},
{
    toJSON: {
virtuals: true
    }
})
//This will add together the total duration of all the exercises
workoutSchema.virtual("totalDuration").get(function (){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
})
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout