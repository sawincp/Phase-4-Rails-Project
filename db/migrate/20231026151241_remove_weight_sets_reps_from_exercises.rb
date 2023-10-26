class RemoveWeightSetsRepsFromExercises < ActiveRecord::Migration[7.0]
  def up
    remove_column :exercises, :weight
    remove_column :exercises, :sets
    remove_column :exercises, :reps
  end

  def down
    add_column :exercises, :weight, :integer
    add_column :exercises, :sets, :integer
    add_column :exercises, :reps, :integer
  end
end
