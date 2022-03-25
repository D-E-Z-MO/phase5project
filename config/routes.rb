Rails.application.routes.draw do
  resources :responses
  resources :icebreakers
  resources :new_ice_breakers
  resources :users
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    # post "/new", to: "icebreakers#create"
    post "/icebreakers", to: "icebreaker#index"
    post `/icebreakers/${id}`, to: "icebreakers#show"
    get "/newicebreakers", to: "new_ice_breakers#index"
    delete "/response", to: "responses#delete"
    post "/response", to: "responses#create"


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
