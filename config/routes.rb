Rails.application.routes.draw do
  # get '/hello', to: 'application#hello_world'
  post "/signup", to: "users#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
