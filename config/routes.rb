Rails.application.routes.draw do
  resources :books, except: [:destroy] do
    get :search, on: :collection
    get 'destroy', on: :member, to: 'books#destroy', as: 'destroy'
  end
  root 'books#index'
end
