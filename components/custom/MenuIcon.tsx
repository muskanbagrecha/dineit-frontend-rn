import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

const MenuIcon = () => {
    return (
        <TouchableOpacity style={styles.menuContainer}>
            <Ionicons name="menu" size={24} color={Colors.secondary} style={styles.menuIcon} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        alignSelf: 'flex-end',
    },
    menuIcon: {
        width: 40,
        height: 40,
    }
});

export default MenuIcon;