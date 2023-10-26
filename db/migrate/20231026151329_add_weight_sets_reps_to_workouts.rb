class AddWeightSetsRepsToWorkouts < ActiveRecord::Migration[7.0]
  def up
    add_column :workouts, :weight, :integer
    add_column :workouts, :sets, :integer
    add_column :workouts, :reps, :integer
  end

  def down
    remove_column :workouts, :weight
    remove_column :workouts, :sets
    remove_column :workouts, :reps
  end
end
