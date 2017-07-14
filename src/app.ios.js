/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';

import { iconsMap, iconsLoaded } from './utils/AppIcons';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: true
};
console.disableYellowBox = true;
class App extends Component {
	constructor(props) {
		super(props);
		iconsLoaded.then(() => {
			this.startApp();
		});
	}

	startApp() {
		Navigation.startTabBasedApp({
			tabs: [
				{
					label: 'Vingroup',
					screen: 'movieapp.Group',
					icon: iconsMap['ios-home'],
					selectedIcon: iconsMap['ios-home'],
					title: 'Ngôi nhà Vingroup',
					navigatorStyle
				},
				{
					label: 'Bản tin',
					screen: 'movieapp.Movies',
					icon: iconsMap['ios-megaphone'],
					selectedIcon: iconsMap['ios-megaphone'],
					title: 'Bản tin',
					navigatorStyle,
					navigatorButtons: {
						rightButtons: [
							{
								title: 'Search',
								id: 'search',
								icon: iconsMap['ios-search']
							}
						]
					}
				},
				{
					label: 'Cá nhân',
					screen: 'movieapp.Profile',
					icon: iconsMap['ios-person'],
					selectedIcon: iconsMap['ios-person'],
					title: 'Trang cá nhân',
					navigatorStyle
				},
				{
					label: 'P&L',
					screen: 'movieapp.Profile',
					icon: iconsMap['ios-people-outline'],
					selectedIcon: iconsMap['ios-people-outline'],
					title: 'Ngôi nhà P&L',
					navigatorStyle
				},
				{
					label: 'Tự hào Vingroup',
					screen: 'movieapp.Profile',
					icon: iconsMap['ios-people-outline'],
					selectedIcon: iconsMap['ios-people-outline'],
					title: 'Tự hào Vingroup',
					navigatorStyle
				},
				{
					label: 'Nâng tầm dịch vụ',
					screen: 'movieapp.Profile',
					icon: iconsMap['ios-people-outline'],
					selectedIcon: iconsMap['ios-people-outline'],
					title: 'Nâng tầm dịch vụ',
					navigatorStyle
				},
				{
					label: 'Bạn cần biết',
					screen: 'movieapp.NeedToKnow',
					icon: iconsMap['ios-paper-outline'],
					selectedIcon: iconsMap['ios-paper-outline'],
					title: 'Bạn cần biết',
					navigatorStyle
				}
				
			],
			tabsStyle: {
				tabBarButtonColor: 'white',
				tabBarSelectedButtonColor: 'white',
				tabBarBackgroundColor: 'black'
			}
		});
	}
}

export default App;
