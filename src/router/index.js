import React from 'react'
import { Transactions, TransactionDetail} from '../pages'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const Router = () => {
    return (
       <Stack.Navigator initialRouteName='Transactions' screenOptions={{headerShown:false}} >
           <Stack.Screen name='Transactions' component={Transactions}/>
           <Stack.Screen name='TransactionDetail' component={TransactionDetail}/>
       </Stack.Navigator>
    )
}

export default Router

