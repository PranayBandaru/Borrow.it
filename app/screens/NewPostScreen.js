import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import colors from "../config/colors";
import AppScreen from "../components/AppScreen";
import FromContainer from "../components/forms/FormContainer";
import FormField from "../components/forms/FormField";
import PickerField from "../components/forms/PickerField";
import SubmitButton from "../components/forms/SubmitButton";
import ImageField from "../components/forms/ImageIField";


const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, "You must insert an image."),
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().label("Price for a day"),
    description: Yup.string().required().label("Description"),
    category: Yup.string().required().nullable().label("Category"),
  });
  
  const categories = [
    { label: "Sports", id: 1 },
    { label: "Music Instruments", id: 2 },
    { label: "Books", id: 3 },
    { label: "Stationery", id: 4 },
    { label: "Electronic Devices", id: 5 },
    { label: "Clothing", id: 6 },
    { label: "Accessories", id: 7 },
    { label: "Other", id: 8 },
  ];
  

function AppListingFormScreen(props) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.light }}
      showsVerticalScrollIndicator={false}
    >
    <AppScreen>
      <FromContainer
        initialValues={{
          images: [],
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        validationSchema={validationSchema}
        //onSubmit={onSubmit}
      >
        <>
          <ImageField name="images" />
          <FormField
            name="title"
            iconType="format-title"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            keyboardType="default"
            placeholder="Title"
          />
          <FormField
            name="price"
            iconType="dollar"
            width="42%"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            keyboardType="numeric"
            placeholder="Price"
          />
          <PickerField
            name="category"
            placeholder="Categories"
            items={categories}
            width="60%"
          />
          <FormField
            name="description"
            iconType="subtitles-outline"
            multiline
            autoCapitalize="none"
            autoCorrect={true}
            keyboardType="default"
            placeholder="Description"
          />
          <SubmitButton title="Post" color={colors.primary} />
        </>
      </FromContainer>
    </AppScreen>
    </ScrollView>
  );
}

export default AppListingFormScreen;
