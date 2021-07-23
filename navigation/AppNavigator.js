import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack";
import DeckListScreen from '../screens/DeckListScreen';
import SelectDeckListScreen from '../screens/SelectDeckListScreen'
import MakingDeckScreen from '../screens/MakingDeckScreen'
import SelectingToppersScreen from '../screens/SelectingToppersScreen'
import DeckPreviewScreen from '../screens/DeckPreviewScreen'
import AddContestFormScreen from '../screens/AddContestFormScreen'
import PaymentsScreen from '../screens/PaymentsScreen'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import SearchContestScreen from '../screens/SearchContestScreen';
import HomeHeader from '../components/headers/HomeHeader';
import ContestTabHeader from '../components/headers/ContestTabHeader';
import ContestDetailHeader from '../components/headers/ContestDetailHeader';
import ContestDetailsTopTabScreen from '../screens/TopTabScreens/ContestDetailsTopTabScreen'
import ContestTopTabScreen from '../screens/TopTabScreens/ContestTopTabScreen'
import MatchDetailsTopTabScreen from '../screens/TopTabScreens/MatchDetailsTopTabScreen'
import MatchTypeTopTabScreen from '../screens/TopTabScreens/MatchTypeTopTabScreen'
import MyMatchesTobTabScreen from '../screens/TopTabScreens/MyMatchesTobTabScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

function HomeNavigator(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MatchTypeTopTabScreen} />
      <Tab.Screen name="MyMatches" component={MyMatchesTobTabScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const homeHeaderFn = ({navigation,route}) =>  ({
    header: (props)=><HomeHeader {...props}/>
})

const contestHeaderFn = (props) =>  ({
  header: ()=><ContestTabHeader {...props}/>
})

const contestDetailHeaderFn = (props) =>  ({
  header: ()=><ContestDetailHeader {...props}/>
})

function MyAppStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="HomeTab" component={HomeNavigator} options={homeHeaderFn}/> 
      <Stack.Screen name="SearchContest" component={SearchContestScreen} options={{
        title: "Search Contest",
        headerStyle:{backgroungColor:"black"}
    }}/>
      <Stack.Screen name="ContestTab" component={ContestTopTabScreen} options={contestHeaderFn}/>
      <Stack.Screen name="ContestDetailTab" component={ContestDetailsTopTabScreen} options={contestHeaderFn}/>
      <Stack.Screen name="ULContestDetailTab" component={ContestDetailsTopTabScreen} options={contestHeaderFn}/>
      <Stack.Screen name="StackSelectDecksList" component={SelectDeckListScreen} options={contestHeaderFn}/>
      <Stack.Screen name="StackDecksList" component={DeckListScreen} options={contestHeaderFn}/>
      <Stack.Screen name="StackMakingDeck" component={MakingDeckScreen} options={contestHeaderFn}/>
      <Stack.Screen name="StackSelectingTopper" component={SelectingToppersScreen} options={contestHeaderFn}/>
      <Stack.Screen name="StackDeckPreview" component={DeckPreviewScreen} options={contestHeaderFn}/>
      <Stack.Screen name="AddContest" component={AddContestFormScreen} options={contestHeaderFn}/>
      <Stack.Screen name="Payments" component={PaymentsScreen}/>
      <Stack.Screen name="MatchDetailsTab" component={MatchDetailsTopTabScreen} />
    </Stack.Navigator>
  )
}

export default function AppNavigator(){
  return(
    <NavigationContainer>
      <MyAppStack/>
    </NavigationContainer>
  )
}

