class PagesController < ApplicationController
  def index
    def index
      @products = Product.limit(8)
    end
  end
end
