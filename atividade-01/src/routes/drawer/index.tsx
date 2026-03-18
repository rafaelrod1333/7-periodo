import { createDrawerNavigator } from "@react-navigation/drawer";
import { ModalScreen } from "../../screens/modal-screen";
import { BottomTabsNav } from "../bottom-tabs";
const Drawer = createDrawerNavigator();

export function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Modal' component={BottomTabsNav} />
            <Drawer.Screen name='List' component={ModalScreen} />
        </Drawer.Navigator>
    )
}