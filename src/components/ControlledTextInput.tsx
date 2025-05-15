import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface ControlledTextInputProps {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  type?: string;
  step?: string;
}

export function ControlledTextInput({
  name,
  control,
  label,
  placeholder,
  step,
  type = 'text',
}: ControlledTextInputProps) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field, formState }) => {
        return (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Input
                {...field}
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
