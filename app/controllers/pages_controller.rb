class PagesController < ApplicationController
  def index
    @products = Product.limit(6).with_attached_avatar
  end
end
