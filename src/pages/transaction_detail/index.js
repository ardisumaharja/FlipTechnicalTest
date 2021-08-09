import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextCus, IconCus, Gap} from '../../components'
import { BankNameFormatter, Colors, DateFormatter, DefaultStyles } from '../../utils'

const TransactionDetail = ({navigation,route}) => {

    const item = route.params.item;

    const [transDetail, setTransDetail] = useState({
        id : item != undefined ? item.id : '',
        name : item != undefined ? item.beneficiary_name : '',
        bankSender : item != undefined ? item.sender_bank : '',
        bankDestination : item != undefined ? item.beneficiary_bank : '',
        accountNumber : item != undefined ? item.account_number : '',
        nominal : item != undefined ? item.amount : '',
        transferNews : item != undefined ? item.remark : '',
        uniqCode : item != undefined ? item.unique_code : '',
        createdTime : item != undefined ? item.created_at : ''
    })

    return (
        <View style={DefaultStyles.PageContainer}>
            <View style={styles.BodyContainer}>
                <View style={[styles.HeaderContainer,{borderBottomWidth:0.5,}]}>
                    <TextCus value={'ID TRANSAKSI:#'+transDetail.id} weight='bold'/>
                    <Gap width={10}/>
                    <IconCus name='content-copy' type='material' color={Colors.border.orange} toucable/>
                </View>
                <View style={[styles.HeaderContainer,{justifyContent:'space-between',borderBottomWidth:0.6}]}>
                    <TextCus value='DETAIL TRANSAKSI' weight='bold'/>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <TextCus value='Tutup' color={Colors.text.orange} weight='bold'/>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{flexDirection:'row',alignItems:'center',marginVertical:10}}>
                        <TextCus value={BankNameFormatter(transDetail.bankSender)} weight='bold' size={16} />
                        <View style={{marginHorizontal:5}}>
                            <IconCus name='arrowright' type='antdesign' />
                        </View>
                        <TextCus value={BankNameFormatter(transDetail.bankDestination)} weight='bold' size={16}/>
                    </View>
                   
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:15}}>
                        <View style={{flex:1}}>
                            <TextCus value={transDetail.name.toUpperCase()} weight='bold'/>
                            <TextCus value={transDetail.accountNumber}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value='NOMINAL' weight='bold'/>
                            <TextCus value={transDetail.nominal}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:15}}>
                        <View style={{flex:1}}>
                            <TextCus value='BERITA TERANSFER' weight='bold'/>
                            <TextCus value={transDetail.transferNews}/>
                        </View>
                        <View style={{flex:1}}>
                            <TextCus value='KODE UNIK' weight='bold'/>
                            <TextCus value={transDetail.uniqCode}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginBottom:15}}>
                        <View style={{flex:1}}>
                            <TextCus value='WAKTU DIBUAT' weight='bold'/>
                            <TextCus value={DateFormatter(transDetail.createdTime)}/>
                        </View>
                       
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TransactionDetail

const styles = StyleSheet.create({
    BodyContainer:{
        flex:1,
    },
    HeaderContainer : {
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:20,
        marginHorizontal:-20,
        borderBottomColor:Colors.border.grey
    }
})
