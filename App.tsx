import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";

export default function App() {
  const [manterConectado, setManterConectado] = useState(true);

  return (
    <View style={estilos.container}>
      <Image
        source={require("./assets/images/imagemFiap.png")}
        style={estilos.logo}
      />

      <Text style={estilos.titulo}>Login</Text>
      <Text style={estilos.subtitulo}>Bem vindo de volta ao app Fiap</Text>

      <CustomInput label="RM" placeholder="RM123456" />

      <CustomInput
        label="Senha"
        placeholder="********"
        secureTextEntry
      />

      <View style={estilos.linha}>
        <Switch value={manterConectado} onValueChange={setManterConectado} />
        <Text style={estilos.manterConectado}>Mantenha conectado(a)</Text>

        <TouchableOpacity style={estilos.esqueceuSenha}>
          <Text style={estilos.textoEsqueceuSenha}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <CustomButton title="Login" />

      <View style={estilos.divisor}>
        <Text style={estilos.textoDivisor}>ou faça login com</Text>
      </View>

      <TouchableOpacity style={estilos.botaoGoogle}>
        <AntDesign name="google" size={18} color="#DB4437" />
        <Text style={estilos.textoGoogle}>Continue com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.criarConta}>
        <Text style={estilos.textoCriarConta}>Crie sua conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },

  logo: {
    width: 200,
    height: 100,
    alignSelf: "center",
    marginBottom: 10,
    resizeMode: "contain",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitulo: {
    color: "#777",
    marginBottom: 20,
  },

  linha: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  manterConectado: {
    marginLeft: 8,
    color: "#444",
  },

  esqueceuSenha: {
    marginLeft: "auto",
  },

  textoEsqueceuSenha: {
    color: "#3b5bfd",
  },

  divisor: {
    alignItems: "center",
    marginVertical: 15,
  },

  textoDivisor: {
    color: "#999",
  },

  botaoGoogle: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  textoGoogle: {
    fontSize: 15,
  },

  criarConta: {
    marginTop: 20,
    alignItems: "center",
  },

  textoCriarConta: {
    color: "#3b5bfd",
    fontWeight: "600",
  },
});
