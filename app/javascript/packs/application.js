// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap"
import {blackAndWhite} from "./custom"
import {add_to_cart, remove_from_cart, show_cart, cart_product_change_count, cart_product_change_price} from "./cart"
import "../stylesheets/application"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

window.blackAndWhite = blackAndWhite
window.add_to_cart = add_to_cart
window.show_cart = show_cart
window.remove_from_cart = remove_from_cart
window.cart_product_change_count = cart_product_change_count
window.cart_product_change_price = cart_product_change_price