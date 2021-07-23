import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MatchCard from './components/MatchCard';
import AppNavigator from './navigation/AppNavigator';
import MatchesListScreen from './screens/MatchesListScreen';
import MyMatchesListScreen from './screens/MyMatchesListScreen';
import Colors from './constants/Colors'
import DeckPreviewScreen from './screens/DeckPreviewScreen';
import ParticipantCard from './components/ParticipantCard';
import DeckListScreen from './screens/DeckListScreen';
import MyContestScreen from './screens/MyContestScreen';
import MatchDetailsContestListScreen from './screens/MatchDetailsContestListScreen';
import UpcomingContestScreen from './screens/UpcomingContestScreen';
import MakingDeckScreen from './screens/MakingDeckScreen';
import SelectingToppersScreen from './screens/SelectingToppersScreen';
import CTopNavigator from './components/customNavigator/CTopNavigator'
import TeamResultCard from './components/TeamResultCard';
import SearchContestScreen from './screens/SearchContestScreen';
import AddContestFormScreen from './screens/AddContestFormScreen';
import CSelect from './components/CSelect';
import PrizePoolDetailCard from './components/PrizePoolDetailCard';
import MatchResultScreen from './screens/MatchResultScreen';
import ContestTopTabScreen from './screens/TopTabScreens/ContestTopTabScreen';
import MatchTypeTopTabScreen from './screens/TopTabScreens/MatchTypeTopTabScreen';
import MyMatchTopTabScreen from './screens/TopTabScreens/MyMatchesTobTabScreen';
import MatchDetailsTopTabScreen from './screens/TopTabScreens/MatchDetailsTopTabScreen';
import ContestDetailsTopTabScreen from './screens/TopTabScreens/ContestDetailsTopTabScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    marginBottom: 100,
    backgroundColor: Colors.lightestGrey,
  },
});
