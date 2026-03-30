-- Create bookings table
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    tour_id INTEGER NOT NULL,
    tour_name TEXT NOT NULL,
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL,
    user_phone TEXT NOT NULL,
    booking_date DATE NOT NULL,
    guests INTEGER NOT NULL DEFAULT 1,
    message TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled'))
);

-- Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public to insert bookings
CREATE POLICY "Enable insert for everyone" ON public.bookings
    FOR INSERT 
    WITH CHECK (true);

-- Create policy to allow users to view their own bookings (if authenticated, but here we assume anonymous for now)
-- For now, let's allow service role or specific authenticated users. 
-- Since it's a simple tourism site, we might just want to store them.
CREATE POLICY "Enable read for authenticated users" ON public.bookings
    FOR SELECT
    TO authenticated
    USING (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_bookings_tour_id ON public.bookings(tour_id);
CREATE INDEX IF NOT EXISTS idx_bookings_user_email ON public.bookings(user_email);