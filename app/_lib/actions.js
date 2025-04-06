'use server';

import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';
import { getBookings } from './data-service';
import { redirect } from 'next/navigation';

export async function updateApplication(formData) {
  // const session = await auth();
  // if (!session) throw new Error('You must be logged in');

  const id = Number(formData.get('id'));
  const name = formData.get('name');
  const description = formData.get('description');
  const business_line_id = Number(formData.get('business_line_id'));

  const updateData = {
    name,
    description,
    business_line_id,
  };
  // console.log('>>> update', updateData);

  const { data, error } = await supabase
    .from('applications')
    .update(updateData)
    .eq('id', id);

  if (error) throw new Error('Application could not be updated');

  revalidatePath('/applications');
  revalidatePath(`/applications/update/${id}`);

  redirect('/applications');
}

export async function updateClassifier(formData) {
  // const session = await auth();
  // if (!session) throw new Error('You must be logged in');

  const id = Number(formData.get('id'));
  const name = formData.get('name');
  const description = formData.get('description');

  const updateData = {
    name,
    description,
  };

  const { error } = await supabase
    .from('classifier')
    .update(updateData)
    .eq('id', id);

  if (error) throw new Error('Classifier could not be updated');

  revalidatePath('/classifier');
  revalidatePath(`/classifier/update/${id}`);

  // redirect('/classifier');
}

export async function updateClassifierItem(formData) {
  // const session = await auth();
  // if (!session) throw new Error('You must be logged in');

  const id = Number(formData.get('id'));
  const name = formData.get('name');
  const description = formData.get('description');

  const updateData = {
    name,
    description,
  };

  const { error } = await supabase
    .from('classifier_items')
    .update(updateData)
    .eq('id', id);

  if (error) throw new Error('Classifier could not be updated');

  revalidatePath('/classifier');
  revalidatePath(`/classifier/update/${id}`);

  // redirect('/classifier');
}

//////////////////////////////////////////////
// Reservations
export async function updateBooking(formData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const bookingId = Number(formData.get('bookingId'));

  const guestBooking = await getBookings(session.user.guestId);
  const guestBookingIds = guestBooking.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error('You are not allowed to update this booking');

  const updatedData = {
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 1000),
  };

  const { error } = await supabase
    .from('bookings')
    .update(updatedData)
    .eq('id', bookingId)
    .select()
    .single();

  if (error) throw new Error('Booking could not be updated');

  revalidatePath('/account/reservations');
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  redirect('/account/reservations');
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  // all data
  // Object.entries(formData.entries());

  // console.log('>>>>', formData);

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: 'unconfirmed',
  };
  // console.log(newBooking);

  const { error } = await supabase
    .from('bookings')
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) throw new Error('Booking could not be created');

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect('/cabins/thankyou');
}

export async function deleteBooking(bookingId) {
  // For testing !!!!!!!!!!!!!!
  // await new Promise((res) => setTimeout(res, 2000));
  // throw new Error('>>> TEST');

  const session = await auth();
  if (!session) throw new Error('You must be logged in');

  const guestBooking = await getBookings(session.user.guestId);
  const guestBookingIds = guestBooking.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error('You are not allowed to delete this booking');

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);

  if (error) throw new Error('Booking could not be deleted');

  revalidatePath('/account/reservations');
}

// Sign In / Out
export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
