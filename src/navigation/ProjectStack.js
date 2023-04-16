import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './bottomTab';
import TransposeStack from './TransposeStack';


const Stack = createNativeStackNavigator();

const ProjectStack = () =>{
    return(
    <Stack.Navigator>
        <Stack.Screen
        name="MainNav"
        component={Tabs}
        options={{title: "Home", headerShown: false}}
        />
        <Stack.Screen
        name="TransposeScreens"
        component={TransposeStack}
        options={{title: "Home", headerShown: false}}
        />
    </Stack.Navigator>
    )
};

export default ProjectStack;