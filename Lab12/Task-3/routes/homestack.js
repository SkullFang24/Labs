import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import BookDetails from '../screens/bookDetail';
const screens = {
Home: {
screen: Home,
},
BookDetails: {
screen: BookDetails,
},
};
// home stack navigator screens
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);