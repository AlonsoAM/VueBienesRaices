import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";
import { computed } from "vue";

export default function usePropiedades() {
  const db = useFirestore();
  const propiedadesCollection = useCollection(collection(db, "propiedades"));

  const priceProperty = computed(() => {
    return (price) => {
      return new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
      }).format(price);
    };
  });

  return {
    propiedadesCollection,
    priceProperty,
  };
}
