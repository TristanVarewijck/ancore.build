import { useEffect, useState } from "react";
import { appDatabase } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

const GetCollection = (collectionName) => {
  const [items, setItems] = useState();
  const query = collection(appDatabase, collectionName);

  useEffect(() => {
    async function getDocuments() {
      const docsSnap = await getDocs(query);
      const response = docsSnap.docs.map((doc) => {
        return doc.data();
      });

      setItems(response);
    }
    getDocuments();
  }, []);

  return items;
};

export default GetCollection;
