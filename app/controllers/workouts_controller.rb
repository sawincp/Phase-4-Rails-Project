class WorkoutsController < ApplicationController

    def index
        render json: Workouts.all
    end

    def create
        user = User.find_by(params[:user_id])
        selected_exercise= Exercise.find_by(:exercise_id)
        workout = user.workoutes.create!(workout_params)
        workout.exercise= selected_exercise
        render json: workout, incldue: [:selected_exercise], status: :created
    end

    private
    def workout_params
        params.permit(:weight, :reps, :sets)
    end
end
