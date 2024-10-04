import { ReactNode } from "react";

interface UserShape {
  name: string;
  age: number;
  isStudent: boolean;
  children?: ReactNode; // Optional children prop
}

const User = ({ name, age, isStudent, children }: UserShape) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isStudent ? "Student" : "Not a Student"}</h2>
      <div>{children}</div> {/* Rendering children */}
    </div>
  );
};

export default User;
