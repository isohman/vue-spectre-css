import Navbar from './navbar';
import Hero from './hero';
import Tile from './tile';
import Avatar from './avatar';

export default {
  install: Vue => {
    Vue.use(Navbar);
    Vue.use(Hero);
    Vue.use(Tile);
    Vue.use(Avatar);
  }
};
