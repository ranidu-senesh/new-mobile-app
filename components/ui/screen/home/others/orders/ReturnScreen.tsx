import { View, Text, StyleSheet } from 'react-native';

export default function ReturnScreen() {
    return (
        <View style={styles.container}>
            <Text>return Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});