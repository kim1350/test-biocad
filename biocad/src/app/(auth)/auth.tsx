import { AuthData, usePostAuth } from "@/src/api/authApi";
import LoadingScreen from "@/src/components/LoadingScreen";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import Button from "@/src/components/ui/Buttton";
import InputValid from "@/src/components/ui/InputValid";
import { useAppDispatch } from "@/src/hooks/useAppDispatch";
import { login } from "@/src/store/slices/authSlice";
import { router } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

const AuthScreen = () => {
  const { mutate, isPending } = usePostAuth();
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<AuthData>({
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const send = (fromData: AuthData) => {
    mutate(fromData, {
      onError: (data) => {
        console.log("error", data);
      },
      onSuccess: (data) => {
        dispatch(login(data.token as never));

        router.navigate("/(tabs)");
      },
    });
  };
  return (
    <ThemedView style={styles.container}>
      {isPending && <LoadingScreen />}

      <ThemedView
        colorName="white"
        style={{ borderRadius: 20, padding: 16, gap: 15, margin: 16 }}
      >
        <ThemedText
          size={22}
          style={{ textAlign: "center" }}
          font="medium"
          lineHeight={24}
        >
          Добро пожаловать
        </ThemedText>
        <Controller
          control={control}
          name="email"
          rules={{
            required: { value: true, message: "Заполните поле" },
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <InputValid
              label="Email"
              placeholder="введите email"
              keyboardType="email-address"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: { value: true, message: "Заполните поле" },
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <InputValid
              label="Пароль"
              placeholder="введите пароль"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={error?.message}
            />
          )}
        />
        <View style={{ gap: 10 }}>
          <Button onPress={handleSubmit(send)} title="Войти" />
          <Button
            onPress={() => {
              router.push("/(auth)/register");
            }}
            title="Зарегистрироваться"
            colorName="button"
            textColorName="black"
          />
        </View>
      </ThemedView>
    </ThemedView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
