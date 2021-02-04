class ProductsController < ApplicationController
  def index
    @products = Product.all.with_attached_avatar
  end

  def show
    @product = Product.find(params[:id])
    @products = Product.limit(3).with_attached_avatar
  end
end