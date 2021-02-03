Rails.application.routes.draw do
  get 'products/index'
  get 'products/show'
  root to: 'pages#index'
end
