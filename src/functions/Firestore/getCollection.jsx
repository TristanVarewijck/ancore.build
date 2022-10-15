import { useEffect, useState } from "react";
import { appDatabase } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

// implement queryBase javascript
// const queryBase = where ? query.where(where.field, (where.operator as any) || '==', where.value) : query;
const GetCollection = (collectionName) => {
  const [items, setItems] = useState();

  useEffect(() => {
    const getDocuments = async () => {
      const query = collection(appDatabase, collectionName);
      const docsSnap = await getDocs(query);
      const response = docsSnap.docs.map((doc) => {
        return doc.data();
      });
      setItems(response);
    };

    getDocuments();
  }, [collectionName]);

  return items;
};

export default GetCollection;
