class ProductsController < ApplicationController
  def index
    @products = Product.all.with_attached_avatar
  end

  def show
    @product = Product.find(params[:id])
    @products = Product.limit(3).with_attached_avatar
  end

  def add_to_cart
    if (cart_product = current_cart.cart_products.find_by(product_id: product.id))
      cart_product.update(count: cart_product.count.to_i + 1)
    else
      new_cart_product = current_cart.cart_products.build(product: product, count: 1)
      new_cart_product.save
    end
  end

  def cart
    @products = current_cart.cart_products
    respond_to do |format|
      format.html
      format.js
    end
  end

  private

  def product
    @product ||= Product.find(params[:id])
  end
end
