import { Button, Flex, VStack } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { validateSchema } from "./schema";
import { ILogin, initialValue } from "./types";
import { Formik, Form, Field } from "formik";

export const Login = () => {
  const [field, setField] = useState<ILogin | string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setField(e.target.value);
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Flex justify="center" align="center" w="100%" h="100vh">
      <VStack maxW={600}>
        <Formik
          initialValues={initialValue}
          validateShema={validateSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Field
                name="email"
                type="text"
                onChange={handleChange}
              />
              <Field
                name="password"
                type="password"
                onChange={handleChange}
              />

              <Button type="submit">Entrar</Button>
            </Form>
          )}
        </Formik>
      </VStack>
    </Flex>
  );
};
