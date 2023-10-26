class Exercise < ApplicationRecord
    has_many :workouts
    has_many :users, through: :workouts
    
    validates :name, presence: {message: "Please enter the exercise"}
   
end
