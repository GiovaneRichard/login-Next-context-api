import { Flex, VStack } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { validateSchema } from "./schema";
import { ILogin, intialValue } from "./types";
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
          initialValue={intialValue}
          validateShema={validateSchema}
          onSubmit={handleSubmit}
        >
          {({errors}) => (
            <Form>
              <Field
              name="email"
                type="text"
                value={field?.email}
                onChange={handleChange}
                }
              />
            </Form>
          )}
        </Formik>
      </VStack>
    </Flex>
  );
};
