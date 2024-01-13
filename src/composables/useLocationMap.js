import { ref } from "vue";

export default function useLocationMap() {
  const zoom = ref(15);
  const center = ref([-13.6918919, -76.0265691]);

  function pin(e) {
    const marker = e.target.getLatLng();
    center.value = [marker.lat, marker.lng];
    console.log(center.value);
  }

  return {
    zoom,
    center,
    pin,
  };
}
