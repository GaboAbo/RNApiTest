import { useState } from "react";

const UpdateItem = ({
  service,
  endpoint,
  itemId,
  initialData,
  onItemUpdate,
}) => {
  const [name, setName] = useState(initialData.name);
  const [error, setError] = useState(null);

  const handleUpdate = async () => {
    try {
        const updatedItem = await service.update(endpoint, itemId, { name });
        if (onItemUpdated) {
            onItemUpdate(updatedItem);
        }
    }
  }
};
