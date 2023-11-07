Rails.application.routes.draw do
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  get "/exercises", to: "exercises#index"
  resources :workouts 
  




  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
