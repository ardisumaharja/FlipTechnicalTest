import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { IconCus } from '../../../components'
import { Colors } from '../../../utils'
import { TextCus } from '../../single_components'

const SearchBar = ({onSearch, onFiltered, filteredType}) => {
    return (
        <View style={styles.Container} >
            <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
                <IconCus name='search1' type='antdesign' color={Colors.border.grey}/>
                <TextInput placeholder='Cari nama, bank, atau nominal' onChangeText={onSearch}/>
            </View>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={onFiltered}>
                <TextCus value={filteredType} color={Colors.text.orange} weight='bold'/>
                <IconCus name='chevron-down' type='ionicon' color={Colors.border.orange}/>
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    Container : {
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : 'white', 
        paddingHorizontal : 8,
        borderRadius : 10,
    }
})
