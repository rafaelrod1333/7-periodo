import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { CustomModalScreen } from '../../components/modal';


const BottomTabs = createBottomTabNavigator(); 

export function BottomTabsNav(){
    return(
           <BottomTabs.Navigator  
          screenOptions={{  
            headerShown: false,
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' }, 
            tabBarActiveTintColor: '#000', 
          }} 
        > 
          <BottomTabs.Screen name="SLIDE"> 
            {() => <CustomModalScreen animation="slide" themeColor="#2196F3" />} 
          </BottomTabs.Screen> 
           
          <BottomTabs.Screen name="FADE"> 
            {() => <CustomModalScreen animation="fade" themeColor="#FF00FF" />} 
          </BottomTabs.Screen> 
           
          <BottomTabs.Screen name="NONE"> 
            {() => <CustomModalScreen animation="none" themeColor="#FF9800" />} 
          </BottomTabs.Screen> 
        </BottomTabs.Navigator>           
    )
}