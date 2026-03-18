import { View } from "react-native";
import { CustomModalScreen } from "../../components/modal";


export function ModalScreen() {
    return(
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
            <CustomModalScreen animation="fade" themeColor="#FF9800"  />
        </View>
    )
}