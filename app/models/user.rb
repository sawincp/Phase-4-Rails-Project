class User < ApplicationRecord
    has_many :workouts
    has_many :exercises, through: :workouts

    has_secure_password

    validates :username, presence: true, uniqueness: true
end
