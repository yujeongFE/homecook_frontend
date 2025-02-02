import React, { useState } from "react";
import { View, Image, Modal, StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListScreen from "./BottomTab/ListScreen";
import BookmarkScreen from "./BottomTab/BookmarkScreen";
import CustomerStartScreen from "../pages/CustomerStartScreen";
import SearchScreen from "./BottomTab/SearchScreen";
import MypageScreen from "./BottomTab/MypageScreen";
import SearchResult from "../components/Search/SearchResult";
import AddBookmarkScreen from "../pages/AddBookmarkScreen";
import ModalComponent from "../common/ModalComponent";
import ShopScreen from "../pages/ShopScreen";
import MenuDetailScreen from "../pages/MenuDetailScreen";
import OrderMenuScreen from "../pages/OrderMenuScreen";
import store from "../store/redux/store";
import { Provider } from "react-redux";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const [searchModalVisible, setSearchModalVisible] = useState(false);

  const openSearchModal = () => {
    setSearchModalVisible(true);
  };

  const closeSearchModal = () => {
    setSearchModalVisible(false);
  };

  return (
    <Provider store={store}>
      <View style={{ width: "100%", height: "100%" }}>
        <Tab.Navigator
          initialRouteName="CustomerStartScreen"
          screenOptions={({ route }) => ({
            tabBarStyle: { backgroundColor: "#ffb15f", height: 51 },
            tabBarIconStyle: { marginBottom: 1, marginTop: 10 },
            tabBarLabelStyle: { display: "none" },
          })}
        >
          <Tab.Screen
            name="ListScreen"
            component={ListScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Image
                  source={{
                    uri: "https://velog.velcdn.com/images/thgus05061/post/9945ec5c-1f25-4992-93d6-f20dfe86c18e/image.png",
                  }}
                  style={{
                    width: 18,
                    height: 20.5,
                  }}
                />
              ),
            }}
          />

          <Tab.Screen
            name="BookmarkScreen"
            component={BookmarkScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Image
                  source={{
                    uri: "https://velog.velcdn.com/images/thgus05061/post/2018910e-32b1-4d7f-aeb9-7d7e9e7c712f/image.png",
                  }}
                  style={{
                    width: 27,
                    height: 27,
                  }}
                />
              ),
            }}
          />

          <Tab.Screen
            name="CustomerStartScreen"
            component={CustomerStartScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    top: -20,
                    width: 71,
                    height: 71,
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ffb15f",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 4,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://velog.velcdn.com/images/thgus05061/post/29e392b5-ae80-4edc-9492-56b5b868971d/image.png",
                    }}
                    style={{
                      width: 27.8,
                      height: 27.4,
                    }}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="SearchScreen"
            component={SearchScreen}
            listeners={() => ({
              tabPress: (e) => {
                e.preventDefault();
                openSearchModal();
              },
            })}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Image
                  source={{
                    uri: "https://velog.velcdn.com/images/thgus05061/post/24bc745f-f288-4cec-b0f9-e0e46a60f889/image.png",
                  }}
                  style={{
                    width: 18,
                    height: 18,
                  }}
                />
              ),
            }}
            initialParams={{ closeModal: closeSearchModal }}
          />
          <Tab.Screen
            name="MypageScreen"
            component={MypageScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Image
                  source={{
                    uri: "https://velog.velcdn.com/images/thgus05061/post/d4caa6f3-826b-4fb5-910f-6d34726fd7c4/image.png",
                  }}
                  style={{
                    width: 19,
                    height: 19,
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name={"SearchResult"}
            component={SearchResult}
            options={{
              headerShown: false,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name={"AddBookmarkScreen"}
            component={AddBookmarkScreen}
            options={{
              headerShown: false,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name={"ShopScreen"}
            component={ShopScreen}
            options={{
              headerShown: false,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name={"MenuDetailScreen"}
            component={MenuDetailScreen}
            options={{
              headerShown: false,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name={"OrderMenuScreen"}
            component={OrderMenuScreen}
            options={{
              headerShown: false,
              tabBarButton: () => null,
            }}
          />
        </Tab.Navigator>

        <ModalComponent
          modalVisible={searchModalVisible}
          closeModal={closeSearchModal}
        />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingBottom: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 371,
    height: 724,
    borderRadius: 21,
    backgroundColor: "#ffffff",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 16,
    color: "blue",
  },
});
