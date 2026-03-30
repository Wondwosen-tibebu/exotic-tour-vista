import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { createBooking } from '../lib/supabase';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from '../lib/utils';

const bookingSchema = z.object({
  user_name: z.string().min(2, 'Name must be at least 2 characters'),
  user_email: z.string().email('Invalid email address'),
  user_phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  booking_date: z.date(),
  guests: z.preprocess((a) => parseInt(a as string, 10), z.number()),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  tour: {
    id: number;
    name: string;
  };
  onSuccess?: () => void;
}

export default function BookingForm({ tour, onSuccess }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema) as any,
    defaultValues: {
      user_name: '',
      user_email: '',
      user_phone: '',
      guests: 1,
      message: '',
      booking_date: new Date(),
    } as any,
  });

  async function onSubmit(values: any) {
    setIsSubmitting(true);
    try {
      await createBooking({
        ...values,
        tour_id: tour.id,
        tour_name: tour.name,
        booking_date: values.booking_date.toISOString(),
      });
      
      toast.success('Booking request sent successfully!');
      form.reset();
      onSuccess?.();
    } catch (error: any) {
      console.error('Booking error:', error);
      toast.error('Failed to submit booking.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const TypedFormField = FormField as any;

  return (
    <Form {...form as any}>
      <form onSubmit={form.handleSubmit(onSubmit as any)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TypedFormField
            control={form.control}
            name="user_name"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <TypedFormField
            control={form.control}
            name="user_email"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TypedFormField
            control={form.control}
            name="user_phone"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <TypedFormField
            control={form.control}
            name="guests"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Guests</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <TypedFormField
          control={form.control}
          name="booking_date"
          render={({ field }: any) => (
            <FormItem className="flex flex-col">
              <FormLabel>Preferred Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <TypedFormField
          control={form.control}
          name="message"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Special requests..." 
                  className="resize-none"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 h-12 rounded-xl font-bold" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            `Confirm Booking`
          )}
        </Button>
      </form>
    </Form>
  );
}