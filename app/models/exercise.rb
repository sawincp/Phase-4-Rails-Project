class Exercise < ApplicationRecord
    has_many :users

    has_many :users, through: :workouts

    validates :name, presence: {message: "Please enter the exercise"}
    validates :weight, numericality: { only_integer: true, greater_than_or_equal_to: 0, message: 'Please enter a valid weight' }
    validates :reps, numericality: { only_integer: true, greater_than_or_equal_to: 0, message: 'Please enter a valid number of reps' }


end
