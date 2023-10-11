import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product/Product'
import Admin from "../views/Admin";
import AddProduct from "../views/Product/AddProduct";

import EditProduct from "../views/Product/EditProduct";
import ShowDetails from "../views/Product/ShowDetails";
import WishList from "../views/Product/WishList";

import Signup from "../views/Signup";
import Signin from '../views/Signin';
import Cart from '../views/Cart';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
    // admin home page
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
    // add product
  {
    path: '/admin/product/new',
    name: 'AddProduct',
    component: AddProduct
  },
  // edit product
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },

    // show details of product
  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },

  // sign up and signin

  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
