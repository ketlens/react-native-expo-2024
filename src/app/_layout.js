import { router, Stack, useSegments } from "expo-router";
import { AppProvider } from "../hooks";
import { useAuth } from "../hooks/Auth";
import { useEffect } from "react";

const StackLayout = () => {
  const { user } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(protected)";

    if (!user?.autenticater && inAuthGroup) {
      router.replace("/");
    } else {
      if (user?.autenticated) {
        router.replace("/(protected)");
      }
    }
  }, [user]);

  return (
    <stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
    </stack>
  );
};
export default function Layout() {
  return (
    <AppProvider>
      {/* <StackLayout /> */}
      <Stack />
    </AppProvider>
  );
}
