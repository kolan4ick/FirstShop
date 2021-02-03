Rails.application.routes.draw do
  resources :products
  root to: 'pages#index'
end
