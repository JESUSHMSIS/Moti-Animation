import { FormInput } from "@/components/Forminput";
import GlaringSegment from "@/components/GlaringSegment";
import { GlowingButton } from "@/components/GlowingButton";
import { GradientButton } from "@/components/GradientButton";
import { MotiView } from "moti";
import { StyleSheet, SafeAreaView, Text, Image } from "react-native";

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MotiView
        style={styles.logoContainer}
        from={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          type: "timing",
          duration: 1200,
          delay: 400,
        }}
      >
        <Image
          source={require("@/components/images/logo.png")}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </MotiView>
      <MotiView
        style={styles.formContainer}
        from={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          type: "timing",
          duration: 1200,
          delay: 800,
        }}
      >
        <GlaringSegment style={styles.segment}>
          <Text style={styles.heading}>INICIAR SESION</Text>
          <FormInput placeholder="Direccion de correo" />
          <FormInput placeholder="Contaraseña" secureTextEntry />
          <GlowingButton>Iniciar Sesion</GlowingButton>
          <Text style={styles.text}>Quieres iniciar?</Text>
          <GradientButton style={styles.buttonSignUp}>
            Crear una cuenta
          </GradientButton>
        </GlaringSegment>
      </MotiView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(221 20% 11%)",
    justifyContent: "center",
  },
  heading: {
    opacity: 0.8,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 24,
  },
  formContainer: {
    flex: 1,
    padding: 12,
  },
  segment: {
    margin: 24,
  },
  buttonSignUp: {
    marginTop: 12,
  },
  text: {
    marginTop: 16,
    color: "white",
    textAlign: "center",
    opacity: 0.6,
  },
  logoContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  logoImage: {
    width: 160,
    height: 160,
  },
});
