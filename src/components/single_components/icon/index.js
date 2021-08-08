import React from 'react'
import { StyleSheet, View, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

const IconCus = ({toucable, name, type, size, color}) => {

    if(toucable){
        return(
            <TouchableOpacity>
                <Icon name={name} type={type} size={size} color={color}/>
            </TouchableOpacity>
        )
    }

    return (
        <View>
             <Icon name={name} type={type} size={size} color={color}/>
        </View>
    )
}

export default IconCus

const styles = StyleSheet.create({})
