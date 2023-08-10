import React, { useState } from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Text,
  Image,
  Flex,
  Heading,
  Center,
} from "@chakra-ui/react";
import { IModalActions, IModalProps, IModalTypes } from './types';

export const Modal: React.FC<IModalProps & { destroy: () => void }> = ({
  title,
  titleComplement,
  description,
  complementDescription,
  complementDescription2,
  onCancel,
  onOk,
  cancelText,
  cancelType,
  okText,
  okType,
  isOpen,
  type,
  destroy,
  body,
}) => {
  const [isLoading, setIsLoading] = useState<IModalActions | undefined | void>();

  const handleAction = async (action: IModalActions, callback: any) => {
    try {
      setIsLoading(action);
      await callback;
    } catch (error) {

    } finally {
      setIsLoading();
    }
  }

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={() => {
        if (onCancel) {
          onCancel();
        } else {
          destroy();
        }
      }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent w="500px" h="376px">
        <ModalHeader />
        <ModalBody
          display="flex"
          justifyContent="space-between"
          flexDir="column"
          textAlign="center"
          px={body ? undefined : [8, 16]}
        >
          {title && <Heading size='md'>{title}</Heading>}
          {titleComplement && (
            <Heading size='md' mt={-14}>
              {titleComplement}
            </Heading>
          )}

          {type && (
            <Center>
              <Image
                src={getSvgModalPath(type)}
                alt="icon"
                boxSize="67px"
                alignSelf='center'
              />
            </Center>
          )}
          {description && (
            <Text size='sm' color='gray.dark'>
              {description}
            </Text>
          )}
          {complementDescription && (
            <Text size='sm' color='gray.dark' mt="-6">
              {complementDescription}
            </Text>
          )}
          {complementDescription2 && (
            <Text size='sm' color='gray.dark' mt="-6">
              {complementDescription2}
            </Text>
          )}

          {body && body}

          <Flex mb='58px' justify='space-around'>
            {onCancel && (
              <Button
                h="42px"
                w='202px'
                onClick={() => handleAction('CANCEL', onCancel)}
                variant='ghost'
                isLoading={isLoading === 'CANCEL'}
                type={cancelType}
              >
                {cancelText}
              </Button>
            )}
            {onOk && (
              <Button
                h='42px'
                w='202px'
                onClick={() => handleAction('OK', onOk)}
                isLoading={isLoading === 'OK'}
                type={okType}
              >
                {okText}
              </Button>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}

function getSvgModalPath(type: IModalTypes) {
  switch (type) {
    case 'ERROR':
      return "/svgs/modal-error.svg";
    case 'SUCCESS':
      return "/svgs/modal-success.svg";
    case 'CONFIRM':
      return "/svgs/modal-confirm.svg";
    case 'WARNING':
    default:
      return "/svgs/modal-warnig.svg";
  }
}
