'use server';

import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';
import { getBookings } from './data-service';
import { redirect } from 'next/navigation';

export async function updateElement(formData) {
  // const session = await auth();
  // if (!session) throw new Error('You must be logged in');

  const id = Number(formData.get('id'));
  const name = formData.get('name');
  const description = formData.get('description');
  const division_id = Number(formData.get('division_id'));

  const newData = {
    name,
    description,
    division_id,
  };
  // console.log('>>> update', updateData);

  if (id === 0) {
    const { errorI } = await supabase.from('element').insert(newData);

    if (errorI) throw new Error('Classifier could not be inserted');
  } else {
    const { error } = await supabase
      .from('element')
      .update(newData)
      .eq('id', id);

    if (error) throw new Error('Component could not be updated');
  }
  revalidatePath('/elements');
  revalidatePath(`/elements/update/${id}`);
  redirect('/elements');
}

export async function updateClassifier(formData) {
  // const session = await auth();
  // if (!session) throw new Error('You must be logged in');

  const id = Number(formData.get('id'));
  const name = formData.get('name');
  const description = formData.get('description');

  const data = {
    name,
    description,
  };

  if (id === 0) {
    const { errorI } = await supabase.from('classifier').insert(data);
    if (errorI) throw new Error('Classifier could not be inserted');
  } else {
    const { error } = await supabase
      .from('classifier')
      .update(data)
      .eq('id', id);
    if (error) throw new Error('Classifier could not be updated');
  }

  revalidatePath('/classifiers');
  revalidatePath(`/classifiers/update/${id}`);
}

export async function deleteClassifier(id) {
  // const session = await auth();
  // if (!session) throw new Error('You must be logged in');

  const { error } = await supabase.from('classifier').delete().eq('id', id);
  if (error) throw new Error('Classifier could not be deleted');

  revalidatePath('/classifiers');
  redirect('/classifiers');
}

// export async function updateClassifierItem(formData) {
export async function updateClassifierValue(formData) {
  // const session = await auth();
  // if (!session) throw new Error('You must be logged in');

  const id = Number(formData.get('id'));
  const classifier_id = Number(formData.get('classifier_id'));
  const name = formData.get('name');
  const description = formData.get('description');

  const newData = {
    name,
    classifier_id,
    description,
  };

  if (id === 0) {
    const { errorI } = await supabase.from('classifier_value').insert(newData);
    if (errorI) throw new Error('Classifier value could not be inserted');
  } else {
    const { error } = await supabase
      .from('classifier_value')
      .update(newData)
      .eq('id', id);

    if (error) throw new Error('Classifier value could not be updated');
  }

  revalidatePath('/elements');
  revalidatePath('/classifiers');
  revalidatePath(`/classifiers/update/${id}`);
  // redirect('/classifiers');
}

export async function updateElementClassifier(formData) {
  // const session = await auth();
  // if (!session) throw new Error('You must be logged in');

  console.log('>>> formData:', formData);

  const element_id = Number(formData.get('element_id'));
  const classifier_id = Number(formData.get('classifier_id'));
  const classifier_value_id = Number(formData.get('classifier_value_id'));

  const { error } = await supabase.from('element_classifier').upsert({
    element_id: element_id,
    classifier_id: classifier_id,
    classifier_value_id: classifier_value_id,
  });

  if (error)
    throw new Error('Classifier value for element could not be updated');

  revalidatePath('/elements');
  revalidatePath(`/elements/update/${element_id}`);
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
