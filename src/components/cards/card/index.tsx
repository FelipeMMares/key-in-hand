import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { global } from "../../../styles/global";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../../navigation/routeParams";

type Data = {
    id: string;
    title: string;
    username: string;
    password: string;
    createdAt: string;
}
type CardProps = {
    data: Data;
}
export default function Card({ data }: CardProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RoutesParams>>();

    const handleEditPress = () => navigation.navigate('EditKey', data);
    return (
        <View style={styles.container}>
            <View style={styles.dataContainer}>
               
                <Text style={global.title}>{data.title}</Text>
                <Text style={[global.title, styles.password]}>{data.password}</Text>
                <Text style={[global.text, styles.date]}>Created at {data.createdAt}</Text>
            </View>
            <View style={styles.separator}>
                <Pressable onPress={handleEditPress}>
                    <FontAwesome name="caret-right" size={26} color="black" />
                </Pressable>
            </View>
        </View>
    );
}