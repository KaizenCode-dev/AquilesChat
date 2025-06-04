import { useState } from "react";
import { Form, Input, Button, Link } from "@heroui/react";
import aquiles from "../assets/aquiles-icon.png";

export default function Login() {
  const [action, setAction] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-dark-background text-dark-foreground text-foreground duration-300 ease-in-out">
      <h1 className="text-6xl font-bold text-secondary mb-10 max-sm:hidden">Aquiles Chat</h1>
      <div className="max-lg:w-[100%] max-lg:h-[100%] flex gap-4 p-6 sm:rounded-lg bg-background duration-300 ease-in-out items-center">
        <Form
          className="max-lg:w-[100%] w-[50%] flex flex-col gap-6 p-6 rounded-lg bg-background"
          onReset={() => setAction(null)}
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));
            setAction(`submit ${JSON.stringify(data)}` as any);
          }}
        >
          <h2 className="text-4xl font-bold text-foreground">Iniciar sesión</h2>

          <Input
            isRequired
            errorMessage="Correo electrónico requerido"
            label="Correo"
            labelPlacement="outside"
            name="Correo"
            placeholder="Ingresa tu correo"
            type="text"
          />
          <div className="flex justify-between  w-full relative">
            <Input
              isRequired
              errorMessage="Contraseña requerida"
              label="Contraseña"
              labelPlacement="outside"
              name="Contraseña"
              placeholder="Ingresa tu contraseña"
              type={showPassword ? "text" : "password"}
              className="w-[87%]"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="text-2xl flex items-end"
            >
              {showPassword ? "😣" : "😳"}
            </button>
          </div>
          <div className="flex flex-col justify-center items-center w-full mt-[6rem]">
            <Button color="primary" type="submit" className="w-[100%] ">
              Registrar
            </Button>
            <span>¿No tienes una cuenta? <Link href="/register">Registrate</Link></span>
          </div>
       </Form>
        <div className="w-[50%] max-lg:hidden transition duration-300 ease-in-out flex flex-col justify-center items-center">
          <img src={aquiles} alt="logo" className="w-[100%] h-auto   drop-shadow-xl/50" />
        </div>
      </div>
    </div>
  );
}
