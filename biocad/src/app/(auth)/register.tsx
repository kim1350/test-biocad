import { RegisterData, usePostRegister } from "@/src/api/authApi";
import LoadingScreen from "@/src/components/LoadingScreen";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import Button from "@/src/components/ui/Buttton";
import InputValid from "@/src/components/ui/InputValid";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

const RegisterScreen = () => {
  const { mutate, isPending } = usePostRegister();
  const { control, handleSubmit } = useForm<RegisterData>({
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const send = (fromData: RegisterData) => {
    mutate(fromData, {
      onError: (data) => {
        console.log("error", data);
      },
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };
  return (
    <ThemedView style={styles.container}>
      {isPending && <LoadingScreen />}
      <ThemedText
        size={22}
        style={{ textAlign: "center" }}
        font="medium"
        lineHeight={24}
      >
        Регистрация
      </ThemedText>
      <ThemedView
        colorName="white"
        style={{ borderRadius: 20, padding: 16, gap: 15, margin: 16 }}
      >
        <Controller
          control={control}
          name="name"
          rules={{
            required: { value: true, message: "Заполните поле" },
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <InputValid
              label="Имя"
              required
              placeholder="введите никнейм"
              keyboardType="default"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={error?.message}
            />
          )}
        />
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
              required
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
              required
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
          <Button onPress={handleSubmit(send)} title="Зарегистрироваться" />
        </View>
      </ThemedView>
    </ThemedView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
