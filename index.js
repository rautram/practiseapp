import {Navigation} from 'react-native-navigation';
import NewsScreen from './src/screens/NewsScreen';

Navigation.registerComponent('news', () => NewsScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'news',
            },
          },
        ],
      },
    },
  });
});
