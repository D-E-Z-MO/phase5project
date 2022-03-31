Rails.application.routes.draw do
  resources :responses
  resources :icebreakers
  resources :new_ice_breakers
  resources :users
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post "/icebreakers/:id", to: "icebreakers#create"
    delete "/icebreakers/icebreakers/:id", to: "icebreakers#destroy"
    get "/icebreakers", to: "icebreakers#index"
    get "/newicebreakers", to: "new_ice_breakers#index"
    delete "/responses/:id", to: "responses#delete"
    post "/responses/:id", to: "responses#create"
    get "/responses/:id", to: "responses#index"


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
