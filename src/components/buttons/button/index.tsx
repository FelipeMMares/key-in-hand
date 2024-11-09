import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { global } from "../../../styles/global";
import styles from "./styles";
type StyleKeys = 'moveForward' | 'stepBack';

type ButtonProps = TouchableOpacityProps & {
    title: string;        
    className: StyleKeys; 
    style?: object
};

export default function Button({ title, className, style, ...rest }: ButtonProps) {
    

    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={[styles[className], styles.button, style && style]} {...rest}>

                <Text style={global.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}