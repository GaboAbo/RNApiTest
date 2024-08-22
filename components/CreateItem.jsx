import { useState } from "react";
import { Text, Button, TextInput, View } from "react-native";

const CreateItem = ({ service, endpoint, onItemCreated }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleCreate = async () => {
    try {
      const newItem = await service.create(endpoint, { name });
      setName("");
      if (onItemCreated) {
        onItemCreated(newItem);
      }
    } catch (error) {
      console.error(`Failed to create item in ${endpoint}`, error);
      setError(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Item name"
        value="{name}"
        onChangeText={setName}
      />
      <Button title="Create item" onPress={handleCreate} />
      {error && <Text>Error: {error.message}</Text>}
    </View>
  );
};

export default CreateItem;
