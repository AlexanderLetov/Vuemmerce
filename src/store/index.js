import Vue from 'vue';
import Vuex from 'vuex';
import initalState from '../initial-state.json';
import search from './modules/search';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  state: initalState,

  getters: {
    getCategoryById: state => id => {
      return state.categories.find(category => category.id == id);
    },
    getProductsList: state => {
      return state.products;
    },
    productsAdded: state => {
      return state.products.filter(el => {
        return el.isAddedToCart;
      });
    },
    productsAddedToFavourite: state => {
      return state.products.filter(el => {
        return el.isFavourite;
      });
    },
    getProductById: state => id => {
      return state.products.find(product => product.id == id);
    },
    getProductImages: state => id => {
      return state.products.find(product => product.id == id).images;
    },
    isUserLoggedIn: state => {
      return state.userInfo.isLoggedIn;
    },
    isUserSignedUp: state => {
      return state.userInfo.isSignedUp;
    },
    getUserName: state => {
      return state.userInfo.name;
    },
    getUserEmail: state => {
      return state.userInfo.email;
    },
    getUserAddress: state => {
      return state.userInfo.address;
    },
    getUserPassword: state => {
      return state.userInfo.password;
    },
    getAvatar: state => {
      return state.userInfo.avatarBinary;
    },
    isLoginModalOpen: state => {
      return state.systemInfo.openLoginModal;
    },
    isSignupModalOpen: state => {
      return state.systemInfo.openSignupModal;
    },
    isCheckoutModalOpen: state => {
      return state.systemInfo.openCheckoutModal;
    },
    quantity: state => {
      return state.products.quantity;
    },
    getNewsById: state => id => {
      return state.news.find(newItem => newItem.id == id);
    }
  },

  actions: {
    addToCartAction ({ commit }, id) {
      return new Promise((resolve, reject) => {
          commit('addToCart', id);
          commit('setAddedBtn', id);
          resolve();
      })
    }
  },

  mutations: {
    addToCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = true;
        }
      });
    },
    setAddedBtn: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.isAddedBtn = data.status;
        }
      });
    },
    removeFromCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = false;
        }
      });
    },
    removeProductsFromFavourite: state => {
      state.products.filter(el => {
        el.isFavourite = false;
      });
    },
    isUserLoggedIn: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn;
    },
    isUserSignedUp: (state, isSignedUp) => {
      state.userInfo.isSignedUp = isSignedUp;
    },
    setUserName: (state, name) => {
      state.userInfo.name = name;
    },
    saveAvatar: (state, avatarBinary) => {
      state.userInfo.avatarBinary = avatarBinary;
    },
    setHasUserSearched: (state, hasSearched) => {
      state.userInfo.hasSearched = hasSearched;
    },
    setUserName: (state, name) => {
      state.userInfo.name = name;
    },
    setUserEmail: (state, email) => {
      state.userInfo.email = email;
    },
    setUserAddress: (state, address) => {
      state.userInfo.address = address;
    },
    setUserPassword: (state, password) => {
      state.userInfo.password = password;
    },
    setProductTitleSearched: (state, titleSearched) => {
      state.userInfo.productTitleSearched = titleSearched;
    },
    showLoginModal: (state, show) => {
      state.systemInfo.openLoginModal = show;
    },
    showSignupModal: (state, show) => {
      state.systemInfo.openSignupModal = show;
    },
    showCheckoutModal: (state, show) => {
      state.systemInfo.openCheckoutModal = show;
    },
    addToFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = true;
        }
      });
    },
    removeFromFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = false;
        }
      });
    },
    quantity: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.quantity = data.quantity;
        }
      });
    }
  },

  modules: {
    search
  }
})
