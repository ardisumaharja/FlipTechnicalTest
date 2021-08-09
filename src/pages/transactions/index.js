import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Colors, DefaultStyles } from '../../utils'
import { GET_TRANSACTIONS } from '../../constants'
import { StyleSheet, Text, View } from 'react-native'
import { Gap, ListTransactions, SearchBar, ModalFilter} from '../../components'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import { Actions } from '../../actions'

const Transactions = ({navigation}) => {

    const ref = useRef(false)
    const isFocused = useIsFocused()
    const dispatch = useDispatch()
    const selector = useSelector(state => state.GetTransactions)
    const [transactions, setTransactions] = useState({})
    const [filtered, setFiltered] = useState({})
    const [searchStatus, setSearchStatus] = useState(false)
    const [modalStatus, setModalStatus] = useState(false)
    const [filteredBy, setfilteredBy] = useState({
        name : 'URUTKAN',
        id : 1
    })

    useEffect(()=>{
        if(isFocused){
            setSearchStatus(false)
            Actions(dispatch,GET_TRANSACTIONS)
        }
    },[isFocused])

    useEffect(()=>{
        console.log('Transactions', selector)
        if(selector.length != 0){
            setTransactions(selector)
            setFiltered(selector)
        }

    },[selector])

    const onSelect = (item) => {
        console.log('onSelect', item)
        navigation.navigate('TransactionDetail',{item:item})
    }

    const onSearch = (text) => {
        console.log('onSearch', Object.keys(transactions))
        if(text){
            setSearchStatus(true)
            const temp = text.toLowerCase()
            const arrayConvert = Object.entries(transactions)
            console.log('onSearch_1', arrayConvert )

            const tempList = arrayConvert.filter(([key,value]) => {
                if(value.beneficiary_name.toLowerCase().match(temp) || 
                    value.sender_bank.toLowerCase().match(temp) ||
                    value.beneficiary_bank.toLowerCase().match(temp) || 
                    value.amount.toString().match(temp)
                ){
                    console.log('onSearch_2', value.beneficiary_name)
                    return arrayConvert
                }
            })
            console.log('onSearch_3', tempList)
            console.log('onSearch_4', Object.fromEntries(tempList))
            setFiltered(Object.fromEntries(tempList))
        }else{
            setSearchStatus(false)
            setFiltered(transactions)
        }
    }

    const onFiltered = (type) => {
        console.log('onFiltered',type)
        // setModalStatus(false)
        setfilteredBy(prev=>({...prev, name:type.label, id:type.filteredBy}))
        if(type.filteredBy!=1){
            const arrayConvert = Object.entries(transactions)
            const tempList = arrayConvert.sort((a,b)=>{
                console.log('onFiltered_2',a[1].beneficiary_name)
                const object = type.object == 'name' ? 'beneficiary_name' : 'created_at'
                const object1 = a[1][object].toString().toLowerCase()
                const object2 = b[1][object].toString().toLowerCase()
                if(type.value == 'asc'){
                    if(object1 < object2) return -1
                    if(object1 > object2) return 1
                }else{
                    if(object1 < object2) return 1
                    if(object1 > object2) return -1
                }
                return 0
            })
            .map((item, index)=>{return item})
            console.log('onFiltered_1',tempList)
            setFiltered(Object.fromEntries(tempList))
        }
        else{
            setFiltered(transactions)
        }
    }

    return (
        <View style={DefaultStyles.PageContainer}>
            <ModalFilter 
                isOpen={modalStatus} 
                onClose={()=>setModalStatus(false)} 
                onSelect={onFiltered}
                filteredBy={filteredBy.id}
            />
            <SearchBar onSearch={value=>onSearch(value)} onFiltered={()=>setModalStatus(true)} filteredType={filteredBy.name}/>
            <Gap height={10}/>
            <ListTransactions data={filtered} onSelect={onSelect}/>
        </View>
    )
}

export default Transactions

const styles = StyleSheet.create({})
