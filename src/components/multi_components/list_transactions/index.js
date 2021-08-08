import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import { IconCus, TextCus, Gap } from '../../../components'
import { Colors } from '../../../utils'

const ListTransactions = ({data, onSelect}) => {
    console.log('ListTransactions', data)
    const Item = ({item, onSelect}) => {
        console.log('ListTransactions_item', item)
        return (
            <TouchableOpacity style={styles.ItemContainer} onPress={()=>onSelect(item)}>
                <View style={[styles.FlagList,{backgroundColor:item.status=='SUCCESS'?Colors.mainColors.green1:Colors.mainColors.orange1}]}/>
                <View style={{flexDirection:'row',alignItems:'center',paddingLeft:15,paddingRight:25}}>
                    <View style={{flex:1}}>  
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <TextCus value={item.sender_bank} />
                            <View style={{marginHorizontal:5}}>
                                <IconCus name='arrowright' type='antdesign' />
                            </View>
                            <TextCus value={item.beneficiary_bank} />
                        </View>
                        <TextCus value={item.beneficiary_name.toUpperCase()} />
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <TextCus value={item.amount} />
                            <View style={{marginHorizontal:5}}>
                                <IconCus name='primitive-dot' type='octicon' />
                            </View>
                            <TextCus value={item.completed_at} />
                        </View>

                    </View>
                  
                    <View>
                        <View 
                            style={[styles.StatusContainer, { 
                                borderColor:item.status=='SUCCESS'?Colors.border.green:Colors.border.orange,
                                backgroundColor:item.status=='SUCCESS'?Colors.mainColors.green1:'white',
                            }]}
                        >
                            <TextCus 
                                value={item.status=='SUCCESS'?'Berhasil':'Pengecekan'}
                                color={item.status=='SUCCESS'?'white':'black'}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <FlatList
            data={Object.keys(data)}
            renderItem={({item})=><Item item={data[item]} onSelect={onSelect}/>}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default ListTransactions

const styles = StyleSheet.create({
    ItemContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        borderRadius : 10,
        marginBottom : 10,
        backgroundColor : 'white',
        height : 100,
    },
    StatusContainer : {
        borderRadius : 5,
        borderWidth : 1,
        paddingHorizontal : 5, 
        paddingVertical : 8,
    },
    FlagList : {
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        width:10,
        height:100,
    }
})
