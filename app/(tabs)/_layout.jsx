import { View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router'

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View 
            className="gap-1"
        >
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className="w-6 h-6 justify-center"
            />
            <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs justify-center`}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                title: 'City Forge',
                headerStyle: {backgroundColor: '#28927f'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'},
                headerTitleAlign:'center'
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={"#539ffc"}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="add"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.add}
                            color={"#539ffc"}
                            name="Add"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="project"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.project}
                            color={"#539ffc"}
                            name="Project"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="prediction"
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.model}
                            color={"#539ffc"}
                            name="Predict"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout