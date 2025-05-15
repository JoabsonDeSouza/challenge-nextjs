import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control, Path } from 'react-hook-form';

interface ControlledTextInputProps<T> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  type?: string;
  step?: string;
}

export function ControlledTextInput<T>({
  name,
  control,
  label,
  placeholder,
  step,
  type = 'text',
}: ControlledTextInputProps<T>) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Input
                {...field}
                value={
                  typeof field.value === 'string' ||
                  typeof field.value === 'number' ||
                  Array.isArray(field.value)
                    ? field.value
                    : ''
                }
                placeholder={placeholder}
                type={type}
                step={step}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
