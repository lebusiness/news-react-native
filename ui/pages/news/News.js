import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { News } from "../../entries/news/ui/News";
import { NewsFullItem } from "../../entries/news/ui/NewsFullItem";

const Stack = createNativeStackNavigator();

export function NewsPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Все новости"} component={News} />
      <Stack.Screen name={"Новость"} component={NewsFullItem} />
    </Stack.Navigator>
  );
}
