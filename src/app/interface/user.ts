import { FormControl } from '@angular/forms';

export interface User {
  "id": string,
  "first_name": string | null,
  "last_name": string | null,
  "email": string | null,
  "company": string | null,
  "job_title": string | null,
  "profile_pic_url": string,
  "country": string,
  "city": string | null
}
export interface SearchForm {
  search: FormControl<string | null>;
}
export interface UserForm {
  first_name: FormControl<string | null>;
  last_name: FormControl<string | null>;
  email: FormControl<string | null>;
  job_title: FormControl<string | null>;
  city: FormControl<string | null>;
  company: FormControl<string | null>;
}
