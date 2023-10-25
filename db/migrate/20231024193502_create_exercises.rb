class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :weight
      t.integer :sets

      t.timestamps
    end
  end
end
