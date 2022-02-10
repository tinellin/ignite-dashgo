import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
  errors: FieldError;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, name, errors = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!errors}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: 'gray.900',
        }}
        size="lg"
        {...rest}
        ref={ref}
      />

      {!!errors && <FormErrorMessage>{errors.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
