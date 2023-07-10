import { useRouter } from "./useRouter";

export const About = () => {
  const { push } = useRouter();
  
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => push("/")}>go main</button>
    </div>
  );
};
