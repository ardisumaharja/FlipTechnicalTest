import React from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native'
import { Colors } from '../../../utils'
import RadioButtonRN from 'radio-buttons-react-native';

const ModalFilter = (props) => {

    const radioButton = [
        {
            label: 'URUTKAN'
        },
        {
            label: 'Nama A - Z'
        },
        {
            label: 'Nama Z - A'
        },
        {
            label: 'Tanggal Terbaru'
        },
        {
            label: 'Tanggal Terlama'
        }
    ]

    return (
        <Modal transparent visible={props.isOpen} onRequestClose={props.onClose}>
             <View style={{flex:1}}>
                <TouchableOpacity style={styles.modalBackground} onPress={props.onClose}/>
                <View style={styles.modalContainer}>
                <RadioButtonRN
                    data={radioButton}
                    selectedBtn={(e) => {
                        console.log('radioButton',e)
                        props.onSelect(e)
                    }}
                />
                </View>
             </View>
        </Modal>
    )
}

export default ModalFilter

const styles = StyleSheet.create({
    modalBackground : {
        backgroundColor : 'rgba(0,0,0,0.1)',
        justifyContent : 'center',
        alignItems : 'center',
        flex:1,
    },
    modalContainer : {
        width : '80%',
        height : '80%',
        backgroundColor : 'white',
        paddingHorizontal : 20,
        paddingVertical : 30,
        borderRadius : 20,
        elevation : 20,
        position:'absolute',
        alignSelf:'center',
        bottom:20,
        top:30,
    },
    ContainerItem:{
        backgroundColor:Colors.mainColors.grey1,
        marginBottom:2,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
    }

})
