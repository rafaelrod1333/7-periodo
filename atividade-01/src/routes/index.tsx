import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { ModalScreen } from '../screens/modal-screen';
import { DrawerNav } from './drawer';
import { StackNav } from './stack';


export function Routes() {
    return(
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    )
} 