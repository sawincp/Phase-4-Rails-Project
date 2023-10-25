class Exercise < ApplicationRecord
    has_many :users

    has_many :users, through: :workouts

end
