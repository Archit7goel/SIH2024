import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

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
                tabBarShowLabel: false
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
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
                name="query"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.search}
                            color={"#539ffc"}
                            name="Find"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="project"
                options={{
                    title: 'Projects',
                    headerShown: false,
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
                    title: 'Pred',
                    headerShown: false,
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