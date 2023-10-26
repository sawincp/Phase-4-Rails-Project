class Workout < ApplicationRecord
    belongs_to :user
    belongs_to :exercise

    validates :weight, numericality: { only_integer: true, greater_than_or_equal_to: 0, message: 'Please enter a valid weight' }
    validates :reps, numericality: { only_integer: true, greater_than_or_equal_to: 0, message: 'Please enter a valid number of reps' }
    validates :sets, numericality: { only_integer: true, greater_than_or_equal_to: 0, message: 'Please enter a valid number of sets' }

end
