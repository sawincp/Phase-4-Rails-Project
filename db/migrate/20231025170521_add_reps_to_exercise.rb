class AddRepsToExercise < ActiveRecord::Migration[7.0]
  def change
    add_column :exercises, :reps, :integer
  end
end
