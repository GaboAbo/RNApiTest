import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

const ListItems = ({ service, endpoint, renderItem }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await service.getAll(endpoint);
        setItems(data);
      } catch (error) {
        console.error(`Failed to fetch data from ${endpoint}`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [endpoint, service]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toStrig()}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};

export default ListItems;
