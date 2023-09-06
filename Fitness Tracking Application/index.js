import events from 'events';

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Update progress by adding caloriesBurned from the exercise
    this.progress += exercise.caloriesBurned;

    // Check if the goal is reached
    if (this.progress >= this.goal) {
      // Emit the 'goalReached' event
      this.emit('goalReached');

      // Reset progress to 0 (assuming you want to reset it after the goal is reached)
      this.progress = 0;
    }
  }
}

const Solution = () => {
  const tracker = new FitnessTracker();

  // Define a listener to send a congratulatory message when the goal is reached
  tracker.on('goalReached', () => {
    console.log('Congratulations! You have reached your fitness goal');
  });

  // Simulate adding exercise
  tracker.addExercise({ name: 'Running', caloriesBurned: 500 });
  tracker.addExercise({ name: 'Weightlifting', caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
