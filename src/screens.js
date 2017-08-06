/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Drawer from './modules/_global/Drawer';
import Movies from './modules/movies/Movies';
import MoviesList from './modules/movies/MoviesList';
import Movie from './modules/movies/Movie';
import Search from './modules/movies/Search';
import Group from './modules/groups/Group';
import Profile from './modules/profile/Profile';
import NeedToKnow from './modules/needtoknow/NeedToKnow';
import Login from './modules/Login/LoginScreen';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('vinclub.Movie', () => Movie, store, Provider);
	Navigation.registerComponent('vinclub.Movies', () => Movies, store, Provider);
	Navigation.registerComponent('vinclub.MoviesList', () => MoviesList, store, Provider);
	Navigation.registerComponent('vinclub.Search', () => Search, store, Provider);
	Navigation.registerComponent('vinclub.Drawer', () => Drawer);
	Navigation.registerComponent('vinclub.Group', () => Group, store, Provider);
	Navigation.registerComponent('vinclub.Profile', () => Profile, store, Provider);
	Navigation.registerComponent('vinclub.NeedToKnow', () => NeedToKnow, store, Provider);
	Navigation.registerComponent('vinclub.Login', () => Login, store, Provider);
}
