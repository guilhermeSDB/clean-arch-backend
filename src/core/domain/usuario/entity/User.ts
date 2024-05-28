import { Entity } from "../../../shared/Entity";

export class User extends Entity {
  name: string;
  password: string;
  email: string;

  constructor(
    id: number,
    name: string,
    password: string,
    email: string,
    created_at: Date,
    updated_at: Date
  ) {
    super();
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
