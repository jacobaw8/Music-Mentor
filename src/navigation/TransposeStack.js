import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecordScreen from '../screens/TransposeScreens/RecordScreen';
import TransposeToMelodyScreen from '../screens/TransposeScreens/TransposeToMelodyScreen';
import ChangeKeys from '../screens/TransposeScreens/ChangeKeys';
import ChordProgressionComplement from '../screens/TransposeScreens/ChordProgressionComplement';
import Harmony3rd from '../screens/TransposeScreens/Harmony3rd';
import KeyCheck from '../screens/TransposeScreens/KeyCheck';
import ScoreScreen from '../screens/TransposeScreens/ScoreScreen';

const Stack = createNativeStackNavigator();

const TransposeStack = () =>{
    return(
    <Stack.Navigator>
        <Stack.Screen 
        name="Record"
        component={RecordScreen}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="Transpose1"
        component={TransposeToMelodyScreen}
        options={{title: "Home", headerShown: false}}
        />
        <Stack.Screen
        name="Transpose2"
        component={KeyCheck}
        options={{title: "Home", headerShown: false}}
        />
        <Stack.Screen
        name="Transpose3"
        component={Harmony3rd}
        options={{title: "Home", headerShown: false}}
        />
        <Stack.Screen
        name="Transpose4"
        component={ChangeKeys}
        options={{title: "Home", headerShown: false}}
        />
        <Stack.Screen
        name="Transpose5"
        component={ChordProgressionComplement}
        options={{title: "Home", headerShown: false}}
        />
        <Stack.Screen
        name="Transpose6"
        component={ScoreScreen}
        options={{title: "Home", headerShown: false}}
        />
    </Stack.Navigator>
    )
};

export default TransposeStack