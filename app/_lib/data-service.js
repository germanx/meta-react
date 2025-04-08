import { notFound } from 'next/navigation';
import { eachDayOfInterval } from 'date-fns';
import { supabase } from './supabase';

/////////////
// GET
export async function getComponent(id) {
  const { data, error } = await supabase
    .from('component')
    .select('id, name, description, division_id, division(name)')
    .eq('id', id)
    .single();

  // For testing !!!!!!!!!!!!!!
  // await new Promise((res) => setTimeout(res, 2000));

  if (error) notFound();
  return data;
}

export const getComponents = async function () {
  const { data, error } = await supabase
    .from('component')
    .select('id, name, description, division_id, division(name)')
    .order('name');

  // console.log(data);

  if (error) throw new Error('Applications could not be loaded');
  return data;
};

export const getDivisions = async function () {
  const { data, error } = await supabase
    .from('division')
    .select('id, name, description')
    .order('name');

  if (error) throw new Error('Business division could not be loaded');
  return data;
};

/* Classifier */
export async function getClassifiers() {
  const { data, error } = await supabase
    .from('classifier')
    .select('id, name, description')
    .order('name');
  // console.log('>>> cls', data);

  if (error) throw new Error('Classifier could not be loaded');
  return data;
}

export async function getClassifier(id) {
  const { data, error } = await supabase
    .from('classifier')
    .select('id, name, description')
    .eq('id', id)
    .single();

  if (error) throw new Error('Classifier could not be loaded');
  return data;
}

export async function getClassifierItems(classifier_id) {
  const { data, error } = await supabase
    .from('classifier_item')
    .select('id, name, description, classifier_id')
    .eq('classifier_id', classifier_id)
    .order('name');
  // console.log('>>> cls_items', data, classifier_id);

  if (error) throw new Error('Classifier Items could not be loaded');
  return data;
}

export async function getComponentClassifier(component_id) {
  const { data, error } = await supabase
    .from('component_classifier')
    .select('component_id, classifier_item_id, classifier_item(classifier_id)')
    .eq('component_id', component_id);
  // console.log('>>> cls_items', data);

  if (error) throw new Error('Classifier Items could not be loaded');
  return data;
}
//////////////////////////////////////////////////////////////
// Guests are uniquely identified by their email address
export async function getGuest(email) {
  const { data, error } = await supabase
    .from('guests')
    .select('*')
    .eq('email', email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function getBooking(id) {
  const { data, error, count } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not get loaded');
  }

  return data;
}

export async function getBookings(guestId) {
  const { data, error, count } = await supabase
    .from('bookings')
    // We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)'
    )
    .eq('guestId', guestId)
    .order('startDate');

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }

  return data;
}

export async function getBookedDatesByCabinId(cabinId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all bookings
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('cabinId', cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getSettings() {
  const { data, error } = await supabase.from('settings').select('*').single();

  // For testing !!!!!!!!!!!!!!
  // await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }

  return data;
}

export async function getCountries() {
  try {
    const res = await fetch(
      'https://restcountries.com/v2/all?fields=name,flag'
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error('Could not fetch countries');
  }
}

/////////////
// CREATE

export async function createGuest(newGuest) {
  // console.log('>>> Create Guest', newGuest);
  const { data, error } = await supabase.from('guests').insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error('Guest could not be created');
  }

  return data;
}
/*
export async function createBooking(newBooking) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be created');
  }

  return data;
}

/////////////
// UPDATE
// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(id, updatedFields) {
  const { data, error } = await supabase
    .from('guests')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Guest could not be updated');
  }
  return data;
}

export async function updateBooking(id, updatedFields) {
  const { data, error } = await supabase
    .from('bookings')
    .update(updatedFields)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }
  return data;
}

/////////////
// DELETE

export async function deleteBooking(id) {
  const { data, error } = await supabase.from('bookings').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
  return data;
}
*/
