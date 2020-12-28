Rails.application.routes.draw do
  resources :books do
    get :search, on: :collection
  end
  root 'books#index'
end
