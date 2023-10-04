import { getApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

export function addPost(p) {
  const timestamp = Date.now();
  const db = getDatabase(getApp());
  console.log(p, timestamp);
  set(ref(db, 'posts/' + timestamp), {
    name: p.name,
    timestamp: timestamp,
    pesticide: p.pesticide,
    field_number: p.field_number,
  });
  return false;
}
