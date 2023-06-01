import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";

const SearchScreen = ({ closeModal, navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchType, setSearchType] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("상호명");
  const [items, setItems] = useState([
    { label: "상호명", value: "상호명" },
    { label: "메뉴명", value: "메뉴명" },
  ]);

  // 검색 기록 불러오기
  const loadSearchHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("searchHistory");
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    } catch (error) {
      console.error("검색 기록 불러오기 에러:", error);
    }
  };

  // 검색 기록 저장하기
  const saveSearchHistory = async (keyword) => {
    try {
      const updatedHistory = [...searchHistory, { keyword, searchType }];
      await AsyncStorage.setItem(
        "searchHistory",
        JSON.stringify(updatedHistory)
      );
      setSearchHistory(updatedHistory);
    } catch (error) {
      console.error("검색 기록 저장하기 에러:", error);
    }
  };

  //검색 기록 삭제하기
  const deleteSearchHistory = async (index) => {
    try {
      const updatedHistory = searchHistory.filter((_, i) => i !== index);
      await AsyncStorage.setItem(
        "searchHistory",
        JSON.stringify(updatedHistory)
      );
      setSearchHistory(updatedHistory);
    } catch (error) {
      console.error("검색 기록 삭제 에러:", error);
    }
  };

  const handleSearch = async () => {
    try {
      saveSearchHistory(searchText);
      const response = await fetch(
        `http://3.38.33.21:8080/api/shops/search?latitude=37.60264&longitude=126.924805&shopName=${searchText}&page=0&size=10&orderBy=distance`
      );
      const data = await response.json();
      setSearchResults(data.data.content);
      setSearchText(""); // 검색 완료 후에 검색어 리셋
    } catch (error) {
      console.error("검색 에러:", error);
    }
  };
  const handleDropdownChange = (selectedValue) => {
    setSearchType(selectedValue);
  };
  useEffect(() => {
    loadSearchHistory();
  }, []);

  return (
    <>
      <View style={styles.filter}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={handleDropdownChange}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdwoncontainer}
          labelStyle={{ fontSize: 12, textAlign: "center", fontWeight: "bold" }}
          arrowIconStyle={{
            width: 20,
            height: 20,
            tintColor: "#F3AC61",
          }}
          showTickIcon={false}
          listItemLabelStyle={{
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "center",
          }}
        />
      </View>
      <TextInput
        placeholder="검색어를 입력하세요"
        style={styles.searchWord}
        onChangeText={setSearchText}
        value={searchText}
        onSubmitEditing={handleSearch}
        containerStyle={{ backgroundColor: "white" }}
        inputContainerStyle={{ backgroundColor: "#e0e0e0" }}
        cancelButtonProps={{ buttonTextStyle: { color: "gray" } }}
      />
      <TouchableOpacity onPress={closeModal}>
        <Image
          style={styles.backbutton}
          source={{
            uri: "https://velog.velcdn.com/images/kkaerrung/post/c7eb19ee-5f5d-4408-99e6-16f249b26398/image.png",
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
      <View style={styles.history}>
        <FlatList
          data={searchHistory.filter((item) => item.searchType === searchType)} // 검색 타입에 맞게 필터링
          renderItem={({ item, index }) => (
            <>
              <View style={styles.searchcontainer}>
                <Image
                  source={{
                    uri: "https://velog.velcdn.com/images/kkaerrung/post/0984f279-e46a-40b4-a890-00ea7b772eb9/image.png",
                    width: 19,
                    height: 16,
                  }}
                />
                <Text style={styles.searchhistory}>{item.keyword}</Text>
                <TouchableOpacity onPress={() => deleteSearchHistory(index)}>
                  <Image
                    style={styles.deleteButton}
                    source={{
                      uri: "https://velog.velcdn.com/images/kkaerrung/post/3db22830-f521-4e46-84fe-93e5469a8994/image.png",
                      width: 19,
                      height: 19,
                    }}
                  ></Image>
                </TouchableOpacity>
              </View>
            </>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchWord: {
    width: 175,
    height: 26,
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#afafaf",
    left: 66,
    top: 30,
  },
  searchhistory: {
    width: 52,
    height: 40,
    fontSize: 14,
    left: 40,
    top: 5,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#7d7d7d",
    paddingVertical: 5,
  },
  searchcontainer: {
    flexDirection: "row",
    alignItems: "center",
    left: 15,
  },
  dropdown: {
    width: 100,
    height: 29,
    borderColor: "white",
    borderRadius: 8,
    elevation: 10,
  },
  dropdwoncontainer: {
    width: 100,
    height: 82,
    borderColor: "white",
    borderRadius: 8,
    elevation: 15,
    top: -10,
  },
  filter: {
    position: "absolute",
    left: 250,
    top: 17,
  },
  backbutton: {
    position: "absolute",
    width: 20,
    height: 20,
    left: 16,
    top: 6,
  },
  dropdownarrow: {
    color: "F3AC61",
  },
  clearbutton: {
    top: 190,
  },
  deleteButton: {
    left: 222,
  },
  history: { top: 60 },
});
