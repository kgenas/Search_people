
import { people } from '../../data/people';

export const SearchReult = (choose = '')=> {
    
  console.log('me llamaron');
  if( choose === ''){
      return [];
  }  
  const chooses = choose.toLowerCase(); 
  return people.filter( (value)  => (
        value.name.toLowerCase().includes(chooses) ||
        value.email.toLowerCase().includes(chooses)||
        value.username.toLowerCase().includes(chooses) ||
        value.phone.toLowerCase().includes(chooses)
  ))
}
